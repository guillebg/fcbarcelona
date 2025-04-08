'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import PhoneInput from '../../components/PhoneInput'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

// Credenciales de administrador
const ADMIN_CREDENTIALS = {
  username: 'Mailsense',
  password: 'PuccaYdelza4'
}

export default function AdminPage() {
  const [waitlist, setWaitlist] = useState<Array<{ email: string, name: string, phone: string, timestamp: string }>>([])
  const [newEmail, setNewEmail] = useState('')
  const [newName, setName] = useState('')
  const [newPhone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Verificar si ya está autenticado
    const authStatus = localStorage.getItem('adminAuthenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      // Cargar la lista de espera desde localStorage
      const savedWaitlist = localStorage.getItem('waitlist')
      if (savedWaitlist) {
        setWaitlist(JSON.parse(savedWaitlist))
      }
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuthenticated', 'true')
      // Cargar la lista de espera después de autenticarse
      const savedWaitlist = localStorage.getItem('waitlist')
      if (savedWaitlist) {
        setWaitlist(JSON.parse(savedWaitlist))
      }
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuthenticated')
    setUsername('')
    setPassword('')
  }

  const handleAddEmail = () => {
    if (!newEmail || !newName || !newPhone) return

    const newEntry = {
      email: newEmail,
      name: newName,
      phone: newPhone,
      timestamp: new Date().toLocaleString()
    }

    const updatedWaitlist = [...waitlist, newEntry]
    setWaitlist(updatedWaitlist)
    localStorage.setItem('waitlist', JSON.stringify(updatedWaitlist))
    setNewEmail('')
    setName('')
    setPhone('')
    setMessage('Entry added successfully!')
    setTimeout(() => setMessage(''), 3000)
  }

  const handleRemoveEmail = (emailToRemove: string) => {
    const updatedWaitlist = waitlist.filter(entry => entry.email !== emailToRemove)
    setWaitlist(updatedWaitlist)
    localStorage.setItem('waitlist', JSON.stringify(updatedWaitlist))
    setMessage('Email eliminado con éxito!')
    setTimeout(() => setMessage(''), 3000)
  }

  // Si no está autenticado, mostrar el formulario de inicio de sesión
  if (!isAuthenticated) {
    return (
      <div className={`min-h-screen text-white p-8 ${inter.className}`}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">MailSense Admin</h1>
            <Link href="/">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Volver al inicio
              </Button>
            </Link>
          </div>

          <div className="bg-gray-900/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
            
            {error && (
              <div className="mb-4 p-3 rounded bg-red-900/50 text-red-200 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                  Usuario
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Iniciar sesión
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Si está autenticado, mostrar la página de administración
  return (
    <div className={`min-h-screen text-white p-8 ${inter.className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestión de Lista de Espera</h1>
          <div className="flex gap-4">
            <Button onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
              Cerrar sesión
            </Button>
            <Link href="/">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>

        {/* Add new email form */}
        <div className="bg-gray-900/30 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">Add new entry</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="newName" className="block text-sm font-medium text-gray-300 mb-1">
                Full name
              </label>
              <input
                id="newName"
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                value={newName}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="newEmail" className="block text-sm font-medium text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="newEmail"
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="newPhone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone number
              </label>
              <input
                id="newPhone"
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                value={newPhone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <Button onClick={handleAddEmail} className="bg-blue-600 hover:bg-blue-700">
            Añadir Registro
          </Button>
        </div>

        {/* Waitlist table */}
        <div className="bg-gray-900/30 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6">Waitlist</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-3 text-left">Nombre</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Teléfono</th>
                  <th className="px-6 py-3 text-left">Fecha</th>
                  <th className="px-6 py-3 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {waitlist.map((entry, index) => (
                  <tr key={index} className="border-t border-gray-800">
                    <td className="px-6 py-4">{entry.name}</td>
                    <td className="px-6 py-4">{entry.email}</td>
                    <td className="px-6 py-4">{entry.phone}</td>
                    <td className="px-6 py-4">{entry.timestamp}</td>
                    <td className="px-6 py-4">
                      <Button
                        variant="destructive"
                        onClick={() => handleRemoveEmail(entry.email)}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Status message */}
        {message && (
          <div className="mt-4 p-4 rounded bg-blue-600/20 text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  )
} 