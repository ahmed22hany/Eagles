import React from 'react'

const infoText = [
    {
        title: "معلومات الخدمة",
        desc: `كاميرات المراقبة CCTV بنوعيها IP و HD سواء كانت سلكى او لاسلكي و أنظمة CCTV, او أنظمة المراقبة بالكاميرات HD & IP لتأمين الفلل والشركات والمولات والثري السياحية لمراقبة أنشطة من يترددون على المكان وحماية الأشخاص من السرقة باستخدام (تليفزيون الدائرة المغلقة CCTV بصورة مستمرة لنقل كل ما يحدث بداخل المكان أو بالخارج.`
    },

    {
        title: "خصائص الخدمة",
        desc: `- الكاميرات الخاصة بأنظمة المراقبة التقاط صور ثابتة ونقية بتقنية NTSC.
- التقاط فيديوهات وصور واضحة تقاس بـ Television Lines
- عدسات نقية ويتم قياسها بـ عدسات mm lenses
`
    }
]

const InfoServices = () => {
    return (
        <div dir='rtl'>
            {infoText.map((info, index) => (
                <div key={index} className=' leading-loose p-6'>
                    <h1 className='text-2 text-primary'>{info.title}</h1>
                    <pre className='whitespace-pre-wrap max-w-[1000px] text-1 text-primary'>
                        {info.desc}
                    </pre>
                </div>
            ))}
        </div>
    )
}

export default InfoServices