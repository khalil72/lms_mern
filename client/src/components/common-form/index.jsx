/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../ui/button'
import FormControls from './form-control'

const CommonForm = ({formControls=[] , handleSubmit , buttonText, isButtonDisabled=false, formData, setFormData}) => {
  return (
    <form onSubmit={handleSubmit}>
        <FormControls 
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
        />
       <Button disabled={isButtonDisabled} className='mt-5 w-full bg-black text-white rounded-full hover:border-2 hover:text-black'>{buttonText || 'Submit'}</Button>
    </form>
  )
}

export default CommonForm