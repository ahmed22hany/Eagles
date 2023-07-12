import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ReadMore() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
        setReadMore(!readMore)
    }

    function openModal() {
        setIsOpen(true)
        setReadMore(!readMore)
    }

    const [readMore, setReadMore] = useState(false);

    const extraContent = ['تقدم المؤسسة حلول اتصالات متكاملة للعمـلاء والمؤسسات الصـغـيـرة والكـبـيرة في تأميـن المـنشأت بكل انواعها ، ونظم المراقبة بالكاميرات CCTV و IP  ، ونظـم التحـكم في الدخـول ، وانظـمة انـذار السـرقة ومتـابعـة اوقات الحضور والانصراف ، ونظـم إنذار الحـريق ، ونظم استدعاء الممرضات ، ونظم تنظيم الدور للعملاء وأجهزة الكشف عن المعادن والاسلحة بالأشعة السينية، ونظـم وقوف السيـارات ، والاتصال الداخلي الصوتي والبصري ونظام مكافحة الحرائق، كذلك انظمة المنازل الذكية علاوة على ذلك، توفر الشركة حلـولا مرنـة وقابلة للتطـوير بدرجة عالية لأنظمة الأمان، والهـدف الرئيسـي هو تقديم فائدة مثالية للمستخدميـن لمواجهة تحدياتـهـم على حلول الأمن المادي بمساعدة حلول متوافقة مع السوق وموثوقة وعالية الأداء.'];

    const linkName = readMore ? 'قراءة الاقل' : 'قراءة المزيد';

    return (
        <>
            <button className="Hero-swiper_btn customBtn gap-2 text_btn" onClick={() => {
                setReadMore(!readMore);
                openModal();
            }}>
                {linkName}
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2">
                                        <p className="text-sm text-primary text-right leading-loose">
                                            {extraContent}
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}