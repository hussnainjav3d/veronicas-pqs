import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faUserShield,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { InputField } from '../../Common/InputField'
import { Radio } from '../../Common/RadioButton'
import { SubmitButton } from 'App/Styled'
export const CustomerVerification = () => {
  const handleCustomerInfo = (name, value) => {
    console.log(name, value)
  }
  return (
    <div className="flex  justify-center items-center ">
      <div className="bg-form-gray shadow-lg rounded-md py-6 px-20">
        <div className="flex ">
          <div className="flex-1 p-">
            <h2 className="text-custom-red text-3xl pt-10 pb-6 pl-10">
              Please Provide Your Contact Details
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex  w-40 gap-4">
            <FontAwesomeIcon
              icon={faAddressCard}
              className="text-custom-red text-3xl "
            />
            <p className="text-lg">Contact info</p>
          </div>
          <div className="flex-1 ">
            <InputField
              type="email"
              setValue={(e) => handleCustomerInfo(`email`, e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="flex-1">
            <InputField
              type="number"
              setValue={(e) => handleCustomerInfo(`phone`, e.target.value)}
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 mt-8">
          <div className="flex  w-40 gap-4">
            <FontAwesomeIcon
              icon={faUserShield}
              className="text-custom-red text-3xl "
            />
            <p className="text-lg">Verification</p>
          </div>
          <div className="flex gap-6 justify-center">
            <Radio label="SMS" name="verificationOption" id="sms" value="sms" />
            <Radio
              label="CALL"
              name="verificationOption"
              id="call"
              value="call"
            />
          </div>
        </div>
        <div className="flex pt-4 gap-10">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1">
            <SubmitButton>
              Next
              <span className="pl-3">
                <FontAwesomeIcon icon={faChevronRight} className="text-md" />
              </span>
            </SubmitButton>
          </div>
        </div>
      </div>
    </div>
  )
}
