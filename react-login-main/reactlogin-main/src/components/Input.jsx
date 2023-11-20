import React from 'react';

const TextInput = ({ label, type, id, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border w-full p-3"
      />
    </div>
  );
};

export default TextInput;