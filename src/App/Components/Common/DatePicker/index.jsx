/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerField = ({
  title,
  placeholder,
  errorMessage,
  value,
  setValue,
}) => {
  return (
    <>
      <label className="text-gray-700 font-medium text-sm">
        {title}
        {errorMessage && <span className="text-red-500 required-dot">*</span>}
      </label>
      <DatePicker
        className=" rounded-md
        border-transparent 
        flex-1 
        appearance-none 
        border 
        border-red-200 
        w-full 
        mt-1
        py-1.5 
        px-4 
        bg-white 
        text-gray-700 
        placeholder-gray-400 
        shadow-sm 
        text-base 
        focus:outline-none 
        focus:ring-2 
        focus:ring-red-400 
        focus:border-transparent"
        placeholderText={placeholder}
        onChange={setValue}
        selected={value}
      />
      {errorMessage && (
        <>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="absolute text-red-500 right-2 mt-4"
          />
          <p className=" text-sm text-red-500 mb-1">{errorMessage}</p>
        </>
      )}
    </>
  )
}
