import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange, className = '' }) => {
  return (
    <input
      type="tel"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${className}`}
      placeholder="+34 123 456 789"
    />
  );
};

export default PhoneInput; 