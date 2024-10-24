import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import useLoginModal from '../hooks/useLoginModal'
import Button from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import Modal from '../ui/modal'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/lib/validation'
import useRegisterModal from '../hooks/useRegisterModal'

const LoginModal = () => {
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const onToggle = useCallback(() => {
        loginModal.onClose(),
        registerModal.onOpen()
    }, [loginModal, registerModal])

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    }

    const { isSubmitting } = form.formState
    const bodyContent = <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-12">
            <h3 className='text-3xl font-semibold text-white'>Sign in</h3>
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button label={"Register"} type="Submit" fullWidth secondary large disabled={isSubmitting} />
        </form>
    </Form>
    const footer = (
        <div className='flex items-center justify-center text-neutral-400 mb-4'>
            <p>First time using X?</p>
            <span className='text-white cursor-pointer hover:underline' onClick={onToggle}>{" "} Create an account</span>
        </div>
    )
    return (
        <Modal isOpen={loginModal.isOpen} onClose={loginModal.onClose} body={bodyContent} footer={footer} />
    )
}

export default LoginModal