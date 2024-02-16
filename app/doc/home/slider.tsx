'use client'


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay,EffectFade } from 'swiper/modules';
import {usePathname} from "next/navigation";
import Link from "next/link";

const Slider = ()=>{
    const path = usePathname()
    const img = [
        {
            id: 1,
            img:
                'https://dc599.4shared.com/img/smv16fDsjq/s24/18d75d0e568/bg-2?async&rand=0.3161701137945139',
        },
        {
            id: 2,
            img:
                'https://dc599.4shared.com/img/_bVAxyM5ku/s24/18d75d0d5c8/bg-1?async&rand=0.13974284726072117',
        },
        {
            id: 3,
            img: 'https://dc599.4shared.com/img/5if05Xmsku/s24/18d75d0f8f0/bg-3?async&rand=0.229121938098233',
        },
    ];



    return(
        <div className='w-full flex'>


            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl:'.button-next',
                    prevEl:'.button-prev'
                }}
                modules={[Pagination, Navigation,Autoplay]}
                className={path=='/page/homeTow'?'mySwiper h-[700px] mm:h-[450px] smm:h-[350px] relative group':'mySwiper h-[600px] mm:h-[450px] smm:h-[250px] relative group'}
            >
                {
                    img.map((e,index)=>{

                        return(
                            <SwiperSlide key={index} className='h-full w-full'>
                                <img src={e.img} alt={`e.id`} className='h-full w-full'/>
                            </SwiperSlide>
                        )
                    })
                }

                <div className="absolute w-full h-4/6 flex top-1/2 !z-30" style={{ transform: 'translate(0%, -50%)' }}>
                    <div className=" w-2/3 h-full text-black flex flex-col justify-center items-start ml-[8%] ">
                        <h2 className="text-[48px] font-medium md:text-[40px] mm:text-[32px] smm:text-[20px] smm:mt-5">Keep Your Body</h2>
                        <h2 className="text-[48px] font-medium md:text-[40px] mm:text-[32px] smm:text-[20px]">And Skin Shiny</h2>
                        <h4 className="text-[19px] mt-4 smm:mt-1 text-[#505050] md:text-[16px] mm:text-[13px] smm:text-[11px]"> Lorem ipsum dolor sit amet  </h4>
                        <h4 className="text-[19px] text-[#505050] md:text-[16px] mm:text-[13px] smm:text-[11px]"> elit. Ipsa laboriosam </h4>
                        <button className='text-white bg-red-700 rounded-xl font-medium
                                       w-[170px] h-[42px] md:w-[160px]  mm:w-[120px] smm:w-[100px] smm:h-[32px] mt-10 smm:mt-5 flex justify-around items-center
                                       text-[20px] md:text-[18x] mm:text-[16px] smm:text-[14px]
                                       hover:bg-[#0000ff00] hover:text-red-500 ease-in-out duration-75 hover:flex-row-reverse'>
                            Show More <p>{">"}</p>
                        </button>
                    </div>
                    <div className='w-1/3 h-full '></div>

                </div>
                <div className='absolute top-[50%] group-hover:flex slider-controler z-40  w-full buttom-2 hidden justify-between items-end'>
                    <div className='button-prev cursor-pointer'>
                        <img width="48" height="48" className='smm:w-[32px] smm:h-[32px]' src="https://img.icons8.com/color/48/circled-left-2--v1.png" alt="circled-left-2--v1"/>
                    </div>
                    <div className='button-next cursor-pointer'>
                        <img className='rotate-180 smm:w-[32px] smm:h-[32px]' width="48" height="48" src="https://img.icons8.com/color/48/circled-left-2--v1.png" alt="circled-left-2--v1"/>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slider