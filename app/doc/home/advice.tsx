'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards,Autoplay } from 'swiper/modules';
const Advice = ()=>{
    const img = [
        {
            name:'Sanitizer',
            title:'Hand sanitizers might not remove harmful chemicals, like pesticides and heavy metals, from hands',
            img:'https://dc688.4shared.com/img/PHCRTU2Eku/s24/18dadf8bc40/advice_1?async&rand=0.5765560384199309'
        },

        {
            name:'Hand Soap',
            title:'After a shower, using a bar of soap will leave you feeling exceptionally clean. Some people really enjoy this sensation of being thoroughly cleansed.',
            img:'https://img.freepik.com/free-photo/close-up-woman-is-washing-soap-foam-from-her-hands-running-water_169016-7279.jpg'
        },
        {
            name:'Shower Gel',
            title:'For any shower gels and body wash to work and kill bacteria off your skin, you need to scrub it across each body part for at least 20 seconds.',
            img:'https://img.freepik.com/free-photo/woman-washing-hair-shower_329181-2417.jpg?w=740&t=st=1707352486~exp=1707353086~hmac=4778199b35f9b25b54f563449821e16d731dac83a22389b9033d18e87064f25c'
        },
    ]

    return (
        <div className='w-[80%] '>

            <Swiper
                effect={'cards'}
                loop={true}
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards,Autoplay]}
                className="mySwiper"
            >
                {
                    img.map((e,index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className='w-full h-[400px] flex items-end relative bg-gray-100'>
                                    <img className='w-full h-full absolute top-0 rounded-xl' src={e.img} alt='..'/>
                                    <div className='z-30 relative mb-5 p-5'>
                                        <h1 className='text-[19px] mb-5 text-white bg-red-500 pl-3 '>{e.name}</h1>
                                        <h3 className='text-[14px] bg-white bg-opacity-20 pl-4 rounded-xl'>{e.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    )
}

export default Advice