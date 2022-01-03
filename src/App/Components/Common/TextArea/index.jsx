import React from 'react'
import { Textarea } from './style'

export const TextArea = ({
  value,
  title,
  id,
  placeholder,
  errorMessage,
  setValue,
}) => {
  return (
    <>
      <label className="text-gray-700 font-medium text-sm">
        {title}
        {errorMessage && <span className="text-red-500 required-dot">*</span>}
      </label>
      <Textarea
        type="text"
        autoFocus
        id={id}
        value={value}
        placeholder={placeholder}
        rows={3}
        cols={5}
        onChange={setValue}
      />
      {errorMessage && (
        <p className=" text-sm text-red-500 mb-1">{errorMessage}</p>
      )}
    </>
  )
}
