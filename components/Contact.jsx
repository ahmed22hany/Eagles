'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'

const Contact = () => {
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
        <div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-6"
            >
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

                <InputGroup className="bg-white">
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

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="bg-white text-primary border-primary outline-primary placeholder:text-primary rounded-[8px] shadow px-6 py-4"
                    placeholder="محتوي الرسالة"
                    rows={6}
                />
                <button
                    type="submit"
                    className="customBtn gap-2 text_btn !bg-primary !text-white"
                >
                    {loading ? '...يرسل' : 'ارسال'}
                </button>

            </form>
        </div>
    )
}

export default Contact