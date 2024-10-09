"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useRegisterModal from '../hooks/useRegisterModal'
import Modal from '../ui/modal'
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { registerStep1Shema } from '@/lib/validation'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import Button from '../ui/button'
import { Input } from '../ui/input'

const RegisterModal = () => {
  const [step, setStep] = useState(1)
  const registerModal = useRegisterModal()
  const bodyContent = step === 1 ? <RegisterStep1 /> : <RegisterStep2 />
  const footer = <div className='text-center text-neutral-400 mb-4'>
    <p>Already have an account? <span className='text-white cursor-pointer hover:underline'>Sign in</span></p>
  </div>
  return (
    <Modal body={bodyContent} footer={footer} isOpen={registerModal.isOpen} onClose={registerModal.onClose} step={step} totalStep={2} />
  )
}

export default RegisterModal

const RegisterStep1 = () => {
  const form = useForm<z.infer<typeof registerStep1Shema>>({
    resolver: zodResolver(registerStep1Shema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof registerStep1Shema>) {
    console.log(values)
  }

  const { isSubmitting } = form.formState
  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-12">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <Button label={"Next"} type="Submit" fullWidth secondary large disabled={isSubmitting} />
    </form>
  </Form>
}

const RegisterStep2 = () => {
  return <div>Register step1</div>
}