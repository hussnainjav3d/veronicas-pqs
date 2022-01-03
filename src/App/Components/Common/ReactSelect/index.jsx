/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { AsyncPaginate } from 'react-select-async-paginate'

export const ReactSelectField = ({
  title,
  placeholder,
  errorMessage,
  value,
  setValue,
  loadOptions,
  isMulti,
  isSearchable,
  cacheUniqs,
  disabled,
}) => {
  return (
    <>
      <label className="text-gray-700 font-medium text-sm">
        {title}
        {errorMessage && <span className="text-red-500 required-dot">*</span>}
      </label>
      <AsyncPaginate
        value={value}
        placeholder={placeholder}
        onChange={setValue}
        loadOptions={loadOptions}
        cacheUniqs={[cacheUniqs]}
        loadOptionsOnMenuOpen={true}
        isMulti={isMulti}
        additional={{
          page: 1,
        }}
        isSearchable={isSearchable}
        defaultOptions
        isDisabled={disabled}
        className="mt-1 focus:outline-none "
        styles={{
          menu: (provided) => ({ ...provided, zIndex: 9999 }),
        }}
      />
      {errorMessage && (
        <>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="absolute text-red-500 right-11 bottom-9 "
          />
          <p className=" text-sm text-red-500 mb-1">{errorMessage}</p>
        </>
      )}
    </>
  )
}
