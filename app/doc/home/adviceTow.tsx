'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const AdviceTow = ()=>{


    const img = [
        {
            name:'Sanitizer',
            title:'Hand sanitizers might not remove harmful chemicals, like pesticides and heavy metals, from hands',
            img:'https://dc688.4shared.com/img/PHCRTU2Eku/s24/18dadf8bc40/advice_1?async&rand=0.5765560384199309'
        },
        {
            name:'Hand Soap',
            title:'After a shower, using a bar of soap will leave you feeling exceptionally clean. Some people really enjoy this sensation of being thoroughly cleansed, but others have found that it can be rather harsh on the skin.',
            img:'https://img.freepik.com/free-photo/close-up-woman-is-washing-soap-foam-from-her-hands-running-water_169016-7279.jpg'
        },
        {
            name:'Shower Gel',
            title:'For any shower gels and body wash to work and kill bacteria off your skin, you need to scrub it across each body part for at least 20 seconds.',
            img:'https://img.freepik.com/free-photo/woman-washing-hair-shower_329181-2417.jpg?w=740&t=st=1707352486~exp=1707353086~hmac=4778199b35f9b25b54f563449821e16d731dac83a22389b9033d18e87064f25c'
        },
    ]



    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >

                    {img.map((e,index)=>{
                        return(
                            <SwiperSlide key={index}>
                            <div  className='w-full flex flex-row p-10 justify-between'>

                                <div className='w-2/3 p-10'>
                                    <h2  className=' text-[36px] font-medium md:text-[34px] mm:text-[32px] smm:text-[28px]'>{e.name}</h2>
                                    <h4 className='text-[19px] mt-4 text-[#505050] md:text-[18px] mm:text-[16px] smm:text-[14px]'>
                                        {e.title}
                                    </h4>
                                </div>
                                <div className='w-1/3 flex justify-center items-center'>
                                    <img className='rounded-full shadow-gray-500 shadow-lg  w-[270px] h-[270px] md:w-[240px] mm:w-[200px] smm:w-[140px] msm:w-[120px] md:h-[240px] mm:h-[200px] smm:h-[140px] msm:h-[120px]'
                                         src={e.img} alt='..'/>
                                </div>

                            </div>
                            </SwiperSlide>

                        )
                    })}

            </Swiper>

        </div>
    )
}

export default AdviceTow