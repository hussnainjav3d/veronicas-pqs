/* eslint-disable react/prop-types */
import React from 'react'

export const Radio = ({ label, name, id, value }) => {
  return (
    <>
      <label className="inline-flex items-center mt-2 cursor-pointer">
        <input
          type="radio"
          className="cursor-pointer mb-1"
          name={name}
          id={id}
          value={value}
        />
        <span className="pl-3 pb-1">{label}</span>
      </label>
    </>
  )
}
