import React, { ChangeEvent } from 'react';

type HeadlessInputFormProps = {
  label: string;
  name: string;
  required?: boolean;
  description?: string;
  error?: string;
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (value: string) => void; // Callback to handle input changes
};

const HeadlessInputForm: React.FC<HeadlessInputFormProps> = ({
  label,
  name,
  required = false,
  description,
  error,
  inputAttributes,
  onChange, // New onChange prop
}) => {
  const inputId = `${name}-input`;

  // Function to handle input changes and call the onChange callback
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={inputId} id={`${inputId}-label`}>
        {label}
        {required && <span className='text-primary'> *</span>}
      </label>
      <input
        type='text'
        name={name}
        id={inputId}
        onChange={handleInputChange} // Call handleInputChange on input change
        {...inputAttributes}
        aria-labelledby={`${inputId}-label`}
        aria-describedby={`${inputId}-description ${inputId}-error`}
        aria-required={required}
        aria-invalid={!!error}
        className={`focus:border-1 w-full rounded-md border border-background-grey px-2 py-1 transition-all focus:border-background-grey focus:outline-2 focus:outline-primary focus:ring-0 ${
          error ? 'border-red-500' : ''
        }`}
      />
      {description && (
        <div id={`${inputId}-description`} className='text-sm text-gray-600'>
          {description}
        </div>
      )}
      {error && (
        <div id={`${inputId}-error`} className='text-sm text-red-500'>
          {error}
        </div>
      )}
    </div>
  );
};

export default HeadlessInputForm;
