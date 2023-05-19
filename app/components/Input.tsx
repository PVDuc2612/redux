'use client'


import React from 'react';


interface InputProps {
  id: string;
  onChange: any;
  name: string,
  value: string;
  defaultValue: string;
  label: string;
  type?: string;
  selectType?: boolean,
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type,name, selectType,defaultValue, }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        type={type}
        id={id}
        name={name}
        className= {` 
          my-3
          block
          pt-6
          pb-1
          w-full
          text-md
        text-black
          border-b-2
          border-gray-500
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          invalid:border-b-1
          focus:border-blue-800 
          focus:border-b-[3px]
          ${selectType ? 'select-none' : 'select-text'}
      `}
        
        placeholder=" " 
      />
      <label 
        htmlFor={id} 
        className="
        absolute 
        text-md
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-10 
        origin-[0] 
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      ">{label}</label>
    </div>
  )
}

export default Input;
