'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'

const ContactProducts = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        email: '',
        number: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { email, value } = e.target

        console.log(e.target.value);

        setForm({ ...form, [email]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_66rvt4q',
            'template_6750abu',
            {
                from_number: form.number,
                to_name: 'Ahmed',
                from_email: form.email,
                to_email: 'ahany5673@gmail.com',
                message: form.message
            },
            's9ksSxEKl3bxQIoL-'
        )

            .then(() => {
                alert('Thank you , I will get back to you as soon as possible')

                setForm({
                    email: '',
                    number: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)

                console.log(error);

                alert('Something went wrong.')
            })
    }

    return (
        <div dir='rtl'>
            <h1 className='text-2 text-[24px] text-primary pt-2'>تواصل معانا</h1>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex max-md:flex-col gap-4 flex-wrap mt-6 p-2"
            >
                <div className='w-[45%] max-md:w-full'>
                    <InputGroup className="bg-white">
                        <InputLeftElement className="!right-0 mt-[6px]">
                            <MdOutlineMailOutline color='primary' className="text-primary w-6 h-6" />
                        </InputLeftElement>
                        <Input
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            className="vision_input !text-primary placeholder:text-primary"
                            placeholder={'البريد الاكتروني'}
                        />
                    </InputGroup>

                    <InputGroup className="bg-white mt-5 max-md:w-full">
                        <InputLeftElement className="!right-0 mt-[6px]">
                            <AiOutlinePhone color='primary' className="text-primary w-6 h-6" />
                        </InputLeftElement>
                        <Input
                            type="number"
                            name='number'
                            value={form.number}
                            onChange={handleChange}
                            className="vision_input text-primary placeholder:text-primary"
                            placeholder={'رقم الهاتف'}
                        />
                    </InputGroup>

                </div>


                <div className='w-[50%] max-md:w-full'>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="bg-white w-full text-primary border-primary outline-primary placeholder:text-primary rounded-[8px] shadow px-6 py-4"
                        placeholder="محتوي الرسالة"
                        rows={4}
                    />
                </div>


                <div className='w-full'>
                    <button
                        type="submit"
                        className="customBtn gap-2 text_btn !bg-primary !text-white !w-full"
                    >
                        {loading ? '...يرسل' : 'ارسال'}
                    </button>
                </div>


            </form>
        </div>
    )
}

export default ContactProducts