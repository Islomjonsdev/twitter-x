"use client"

import React, { useCallback } from 'react';
import Image from "next/image"
import Button from '../ui/button';
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import twitterIcon from "../../public/images/x.svg"
import useRegisterModal from '../hooks/useRegisterModal';
import RegisterModal from '../modals/register-modal';
import useLoginModal from '../hooks/useLoginModal';
import LoginModal from '../modals/login-modal';

const Auth = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    const onOpenRegisterModal = useCallback(() => {
        registerModal.onOpen()
    }, [registerModal])

    const openLoginModal = useCallback(() => {
        loginModal.onOpen()
    }, [loginModal])
    return (
        <>
            <RegisterModal />
            <LoginModal />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen'>
                <Image src={twitterIcon} alt="twitterIcon" width={450} height={450} className="justify-self-center hidden md:block" />
                <div className='flex flex-col justify-center h-full md:h-[70vh] md:justify-between gap-6'>
                    <div className='block md:hidden'>
                        <Image src={twitterIcon} alt="twitterIcon" width={50} height={50} />
                    </div>
                    <h1 className='text-6xl font-bold'>Happening now</h1>
                    <div className='w-full md:w-[60%]'>
                        <h1 className='font-bold text-3xl mb-4'>Joing today.</h1>
                        <div className='flex flex-col gap-2'>
                            <Button label={
                                <div className='flex gap-2 items-center justify-center'>
                                    <FcGoogle />
                                    Signup with Google
                                </div>
                            } fullWidth secondary />
                            <Button label={
                                <div className='flex gap-2 items-center justify-center'>
                                    <AiFillGithub />
                                    Signup with Guthub
                                </div>
                            } fullWidth secondary />
                            <div className='flex items-center justify-center'>
                                <div className='h-px bg-gray-700 w-1/2' />
                                <p className='mx-4'>or</p>
                                <div className='h-px bg-gray-700 w-1/2' />
                            </div>
                            <Button label={"Create account"} fullWidth onClick={onOpenRegisterModal} />
                        </div>
                    </div>
                    <div className='w-full md:w-[60%]'>
                        <h3 className='font-medium text-xl mb-4'>Already have an account</h3>
                        <Button label={"Sign in"} fullWidth outline onClick={openLoginModal}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth