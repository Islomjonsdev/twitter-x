"use client"

import useRegisterModal from '../hooks/useRegisterModal'
import Modal from '../ui/modal'
import twitterIcon from "../../public/images/x.svg"
import { useState } from 'react'

const RegisterModal = () => {
  const [ step, setStep ] = useState(1)
  const registerModal = useRegisterModal()
  const bodyContent = step === 1 ? <RegisterStep1 /> : <RegisterStep2 />
  const footer = <div>Footer content</div>
  return (
    <Modal body={bodyContent} footer={footer} isOpen={registerModal.isOpen} onClose={registerModal.onClose} step={step} totalStep={2}/>
  )
}

export default RegisterModal

const RegisterStep1 = () => {
  return <div>Register step1</div>
}

const RegisterStep2 = () => {
  return <div>Register step1</div>
}