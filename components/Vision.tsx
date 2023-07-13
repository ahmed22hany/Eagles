'use client'

import Image from "next/image"
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import Contact from "./Contact"

const Vision = () => {
    return (
        <div dir="rtl" className="p-6 flex justify-between items-start flex-wrap max-md:gap-4">

            <div className="max-md:w-full w-[65%] text-right text-primary">
                <h1 className="text-2 text-[24px]">رؤيــتــنــا</h1>
                <p className="text-1 text-[20px] max-md:text-right text-justify leading-loose mt-4">
                    تقدم المؤسسة حلول اتصالات متكاملة للعمـلاء والمؤسسات الصـغـيـرة والكـبـيرة في تأميـن المـنشأت بكل انواعها، ونظم المراقبة بالكاميرات ، ونظـم التحـكم في الدخـول ، وانظـمة انـذار السـرقة ومتـابعـة اوقات الحضور والانصراف ، ونظـم إنذار الحـريق ، ونظم استدعاء الممرضات ، ونظم تنظيم الدور للعملاء وأجهزة الكشف عن المعادن والاسلحة بالأشعة السينية، ونظـم وقوف السيـارات ، والاتصال الداخلي الصوتي والبصري ونظام مكافحة الحرائق، كذلك انظمة المنازل الذكية علاوة على ذلك، توفر الشركة حلـولا مرنـة وقابلة للتطـوير بدرجة عالية لأنظمة الأمان، والهـدف الرئيسـي هو تقديم فائدة مثالية للمستخدميـن لمواجهة تحدياتـهـم على حلول الأمن المادي بمساعدة حلول متوافقة مع السوق وموثوقة وعالية الأداء
                </p>
            </div>


            <div className="max-md:w-full w-[30%]">
                <h1 className="text-2 text-[24px] text-primary">تواصل معانا</h1>
                <Contact />
            </div>

        </div>
    )
}

export default Vision

