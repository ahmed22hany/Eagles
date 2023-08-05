'use client'

import React, { FormEvent, useState } from 'react'

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'


const Contact = () => {


    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    email, number, message
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
        } catch (error: any) {
            console.log('Error', error)
        }
    }

    return (
        <div>
            <form
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="vision_input text-primary placeholder:text-primary"
                        placeholder={'رقم الهاتف'}
                    />
                </InputGroup>

                <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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