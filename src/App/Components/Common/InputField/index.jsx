/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Input } from 'App/Styled'

export const InputField = ({
  type,
  value,
  name,
  title,
  id,
  disabled,
  placeholder,
  errorMessage,
  setValue,
  tipdata,
}) => {
  return (
    <>
      <label
        data-tip={tipdata}
        className={` ${tipdata && `tooltip`} text-gray-700 font-medium text-sm`}
      >
        {title}
        {tipdata && <span className="tooltip"></span>}

        {errorMessage && <span className="text-red-500 required-dot">*</span>}
      </label>
      <Input
        type={type}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e)}
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
