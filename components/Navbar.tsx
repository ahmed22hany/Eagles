'use client'

import Image from "next/image"
import Link from "next/link"
import { Popover, Transition } from '@headlessui/react'

const Navbar = () => {
    return (
        <nav className="bg-primary w-full pb-1 flexBetween px-10 relative z-50">

            <button className="customBtn gap-2 text_btn max-sm:hidden relative">
                <a href="tel:+201009406638" className=" absolute top-0 w-full h-full" />
                <Image src={'/phone.svg'} alt="Phone Icon" width={17} height={17} />
                تواصل معنا
            </button>

            {/* Desktop view of links */}
            <ul className="flex gap-8 max-sm:hidden">
                <li className="text-1_Nav">
                    <Link className="flexCenter gap-2" href={'/products'}>
                        <Popover className={'relative'}>
                            <Popover.Button className='flexCenter gap-2 outline-none border-none'>
                                <span>
                                    <Image src={'/vector.svg'} alt={'Arrow'} width={14} height={6.81} />
                                </span>
                                خدماتنا
                            </Popover.Button>
                            <Transition
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className=" absolute">
                                    <div className="flex flex-col gap-4 mt-4 bg-white text-primary px-8 py-6 rounded-xl shadow">
                                        <Link href="/" className="hover:bg-[#F3EAB3] py-2 px-14 rounded-2xl text-center">خدمة </Link>
                                        <Link href="/about" className="hover:bg-[#F3EAB3] p-2 rounded-2xl text-center">خدمة 2</Link>
                                        <Link href="/products" className="hover:bg-[#F3EAB3] p-2 rounded-2xl text-center">خدمة 3</Link>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                    </Link>
                </li>
                <li className="text-1_Nav">
                    <Link href={'/about'}>
                        ماذا عنا
                    </Link>
                </li>
                <li className="text-2_Nav">
                    <Link href={'/'}>
                        الرئيسية
                    </Link>
                </li>
            </ul>

            {/* Mobile View of links */}
            <div className="max-sm:flex hidden">
                <Popover className="relative">
                    <Popover.Button className={'outline-none border-none'}>
                        <Image src='/menu.svg' alt="menu icon" width={20} height={16} />
                    </Popover.Button>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-999">
                            <div className="flex flex-col gap-4 mt-4 bg-white text-primary p-6 rounded-xl shadow">
                                <Link href="/" className="hover:bg-[#F3EAB3] p-2 rounded-2xl text-center">الرئيسية</Link>
                                <Link href="/about" className="hover:bg-[#F3EAB3] p-2 rounded-2xl text-center">ماذا عنا</Link>
                                <Link href="/products" className="hover:bg-[#F3EAB3] p-2 rounded-2xl text-center">خدماتنا</Link>
                                <div>
                                    <button className="customBtn gap-2 text_btn w-max !bg-[#F3EAB3] !text-primary relative">
                                        <a href="tel:+2001123382824" className=" absolute top-0 w-full h-full" />
                                        <Image src={'/phone.svg'} alt="Phone Icon" width={17} height={17} />
                                        تواصل معنا
                                    </button>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>

            <Link href={'/'}>
                <Image src={'/logo.svg'} alt="Eagles Logo" width={87} height={72} className="object-contain" />
            </Link>
        </nav>
    )
}

export default Navbar