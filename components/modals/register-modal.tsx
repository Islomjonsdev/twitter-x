"use client"

import useRegisterModal from '../hooks/useRegisterModal'
import Modal from '../ui/modal'
import twitterIcon from "../../public/images/x.svg"

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const bodyContent = (
    <div className='flex flex-col space-y-4 '>
      
    </div>
  )
  const footer = <div>Footer content</div>
  return (
    <Modal body={bodyContent} footer={footer} isOpen={registerModal.isOpen} onClose={registerModal.onClose} />
  )
}

export default RegisterModal