import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faUserCircle,
  faVenusMars,
  faBirthdayCake,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { InputField } from '../../Common/InputField'
import { Radio } from '../../Common/RadioButton'
import { SubmitButton } from 'App/Styled'
import { DatePickerField } from 'App/Components/Common/DatePicker'

export const CustomerPersonal = () => {
  const handleCustomerInfo = (name, value) => {
    console.log(name, value)
  }
  return (
    <div className="flex  justify-center items-center ">
      <div className="bg-form-gray shadow-lg rounded-md py-5 px-20">
        <div className="flex ">
          <div className="flex-1 ">
            <h2 className="text-custom-red text-xl xl:text-2xl font-medium py-4 pl-10">
              Please Provide Your Personal Information
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex w-40 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-custom-red  text-2xl "
              />
            </div>
            <p className="text-md font-light">Full name</p>
          </div>
          <div className="flex-1 ">
            <InputField
              type="text"
              setValue={(e) => handleCustomerInfo(`fName`, e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="flex-1">
            <InputField
              type="text"
              setValue={(e) => handleCustomerInfo(`lName`, e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-40 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faBirthdayCake}
                className="text-custom-red text-2xl "
              />
            </div>
            <p className="text-md font-light">Date of Birth</p>
          </div>
          <div className="flex-1">
            <DatePickerField
              name="dob"
              placeholder="Date of Birth"
              //   setValue={(e) => handleCustomerInfo(`dob`, e.target.value)}
              //   value="dob"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex w-40 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faVenusMars}
                className="text-custom-red text-2xl "
              />
            </div>
            <p className="text-md font-light">Gender</p>
          </div>
          <div className="flex gap-6 ">
            <Radio label="MALE" name="gender" id="male" value="male" />
            <Radio label="Female" name="gender" id="female" value="female" />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-40 gap-4 ">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-custom-red w-10 text-2xl "
              />
            </div>
            <p className="text-md font-light">Location</p>
          </div>
          <div className="flex-1 ">
            <InputField
              type="text"
              setValue={(e) => handleCustomerInfo(`zip`, e.target.value)}
              placeholder="Zip Code*"
            />
          </div>
          <div className="flex-1">
            <InputField
              type="text"
              setValue={(e) => handleCustomerInfo(`city`, e.target.value)}
              placeholder="City"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-40 gap-4"></div>
          <div className="flex-1 ">
            <InputField
              type="text"
              setValue={(e) => handleCustomerInfo(`state`, e.target.value)}
              placeholder="State"
            />
          </div>
          <div className="flex-1">
            <InputField
              type="text"
              setValue={(e) =>
                handleCustomerInfo(`streetAddress`, e.target.value)
              }
              placeholder="Street Address"
            />
          </div>
        </div>
        <div className="flex pt-8 gap-10">
          <div className="flex-1">
            <SubmitButton>
              <span className="pr-3">
                <FontAwesomeIcon icon={faChevronLeft} className="text-md" />
              </span>
              Back
            </SubmitButton>
          </div>
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
