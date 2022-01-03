import Logo from 'App/Assets'

import React from 'react'

import { ReactSelectField } from '../Common/ReactSelect'
// import { CustomerPersonal } from '../CustomerInfo/Personal'
import { DriverInfo } from '../Driver/DriverInfo'

// import { CustomerVerification } from '../CustomerInfo/VerificationForm'

export const Home = () => {
  return (
    <div className=" w-full h-full bg-white ">
      {/* Header Line */}
      <div className=" h-8 bg-custom-red"></div>
      {/* Icon and Slect Language */}
      <div className="flex h-20  justify-between items-center">
        <img className="px-4 w-60" src={Logo} alt="Veronicas Logo" />
        <div className="px-12">
          <ReactSelectField placeholder="Language" />
        </div>
      </div>
      {/* Form */}
      <DriverInfo />
    </div>
  )
}
