import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faUserCircle,
  faVenusMars,
  faBirthdayCake,
  faChevronRight,
  faChevronLeft,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'

import { Radio } from '../../Common/RadioButton'
import { SubmitButton } from 'App/Styled'

import { ReactSelectField } from 'App/Components/Common/ReactSelect'

export const DriverInfo = () => {
  // const handleCustomerInfo = (name, value) => {
  //   console.log(name, value)
  // }
  return (
    <div className="flex  justify-center items-center ">
      <div className="bg-form-gray shadow-lg rounded-md py-5 px-20">
        <div className="flex">
          <div className="flex-1 ">
            <h2 className="text-custom-red text-xl xl:text-2xl font-medium py-4 pl-10">
              Provide Driver’s Information.
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex  w-52 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-custom-red text-2xl"
              />
            </div>
            <p className="text-md font-light">Marital Status</p>
          </div>
          <div className="flex gap-8 justify-center">
            <Radio
              label="Single"
              name="maritalStatus"
              id="single"
              value="single"
            />
            <Radio
              label="Married"
              name="maritalStatus"
              id="married"
              value="married"
            />
            <Radio
              label="Divorced"
              name="maritalStatus"
              id="divorced"
              value="male"
            />
            <Radio
              label="Widowed"
              name="maritalStatus"
              id="widowed"
              value="female"
            />
            <Radio
              label="Other"
              name="maritalStatus"
              id="other"
              value="female"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-52 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faBirthdayCake}
                className="text-custom-red text-xl "
              />
            </div>
            <p className="text-md font-light">Education</p>
          </div>
          <div className="flex-1">
            <ReactSelectField
              name="education"
              placeholder="Education"
              //   setValue={(e) => handleCustomerInfo(`dob`, e.target.value)}
              //   value="dob"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-52 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faVenusMars}
                className="text-custom-red text-lg  "
              />
            </div>
            <p className="text-md font-light">Currently Employed</p>
          </div>
          <div className="flex gap-6 justify-center">
            <Radio label="Yes" name="currentlyEmployed" id="Yes" value="Yes" />
            <Radio label="No" name="currentlyEmployed" id="no" value="no" />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-52 gap-4">
            <div className="w-8 h-6">
              <FontAwesomeIcon
                icon={faVenusMars}
                className="text-custom-red text-xl"
              />
            </div>
            <p className="text-md font-light">Own a House</p>
          </div>
          <div className="flex gap-6 justify-center">
            <Radio label="Yes" name="ownHouse" id="Yes" value="Yes" />
            <Radio label="No" name="ownHouse" id="no" value="no" />
          </div>
        </div>
        <div className="flex items-center gap-6 pt-4">
          <div className="flex  w-52 gap-6">
            <FontAwesomeIcon
              icon={faVenusMars}
              className="text-custom-red text-xl w-10 h-10 "
            />
            <p className="text-md font-light">
              At-Fault Accidents in The Last 5 Years
            </p>
          </div>
          <div className="flex gap-6 justify-center">
            <Radio label="Yes" name="currentlyEmployed" id="Yes" value="Yes" />
            <Radio
              label="No"
              name="currentlyEmployed"
              id="female"
              value="female"
            />
          </div>
        </div>
        {/* <div className="flex items-center gap-6 mt-6 "></div> */}
        <div className="flex items-center gap-6 pt-6 ">
          <div className="flex  align-top w-52 h-40 gap-4">
            <div className="w-8 h-6 ">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-custom-red text-2xl mt-2"
              />
            </div>
            <p className="text-md font-light">Review driver information</p>
          </div>
          <div className=" flex-1">
            <div className="relative w-80 h-40 bg-white border border-red-300 rounded-md">
              <div className="absolute right-3 bottom-3">
                <SubmitButton>
                  <FontAwesomeIcon icon={faPlus} className="text-md " />
                </SubmitButton>
              </div>
              <div className="absolute right-0 -top-12">
                <SubmitButton>
                  <span className="pr-3">
                    <FontAwesomeIcon icon={faPlus} className="text-md" />
                  </span>
                  Driver
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  gap-10 pt-6">
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
