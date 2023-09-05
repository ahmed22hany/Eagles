
'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import React, { useState } from 'react'

export type FormDataProduct = {
  tel: number;
  email: string;
  message: string;
};

const ContactProducts: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataProduct>();
  function onSubmit(data: FormDataProduct) {
    sendEmail(data);
  }
  return (
    <div dir='rtl'>
      <h1 className='text-2 text-[24px] text-primary pt-2 px-4'>تواصل معانا</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-md:flex-col gap-4 flex-wrap mt-6 p-2"
      >
        <div className='w-[45%] max-md:w-full'>
          <InputGroup className="bg-white">
            <InputLeftElement className="!right-0 mt-[6px]">
              <MdOutlineMailOutline color='primary' className="text-primary w-6 h-6" />
            </InputLeftElement>
            <Input
              type="email"
              className="vision_input !text-primary placeholder:text-primary"
              placeholder={'البريد الاكتروني'}
              {...register('email', { required: true })}
            />
          </InputGroup>
          <p dir='ltr' className=''>
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </p>

          <InputGroup className="bg-white mt-5 max-md:w-full">
            <InputLeftElement className="!right-0 mt-[6px]">
              <AiOutlinePhone color='primary' className="text-primary w-6 h-6" />
            </InputLeftElement>
            <Input
              type="number"
              className="vision_input text-primary placeholder:text-primary"
              placeholder={'رقم الهاتف'}
              {...register('tel', { required: true })}
            />
          </InputGroup>

          <p dir='ltr' className=''>
            {errors.tel && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid Telephone-Number.
              </p>
            )}
          </p>
        </div>


        <div className='w-[50%] max-md:w-full'>
          <textarea
            className="bg-white w-full text-primary border-primary outline-primary placeholder:text-primary rounded-[8px] shadow px-6 py-4"
            placeholder="محتوي الرسالة"
            rows={4}
            {...register('message', { required: true })}
          />
        </div>


        <div className='w-full'>
          <button
            type="submit"
            className="customBtn gap-2 text_btn !bg-primary !text-white !w-full"
          >
            ارسال
          </button>
        </div>


      </form>
    </div>
  )
};

export default ContactProducts;
