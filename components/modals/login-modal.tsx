import React from 'react'
import useLoginModal from '../hooks/useLoginModal'
import Modal from '../ui/modal'

const LoginModal = () => {
    const loginModal = useLoginModal()
    const bodyContent = <div>Body content</div>
    const footer = <div>footer</div>
    return (
        <Modal isOpen={loginModal.isOpen} onClose={loginModal.onClose} body={bodyContent} footer={footer} />
    )
}

export default LoginModal