'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination,Navigation ,Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from "react";
import Link from "next/link";


const Products = ()=>{


    const slider = [
        {
            title: "Alcohol 250",
            img:
                "https://dc701.4shared.com/img/Wbhb0Tdrge/s24/18d6b1e3008/250ml?async&rand=0.8512981725331601",
        },
        {
            title: "Alcohol 120",
            img:
                "https://dc701.4shared.com/img/8KNb-1Jtjq/s24/18d6b1e1c80/60ml__2_?async&rand=0.18844881864767649",
        },
        {
            title: "Alcohol 60",
            img:
                "https://dc701.4shared.com/img/ItoLOVmUfa/s24/18d6b1e2450/120ml?async&rand=0.06511800581790839",
        },
        {
            title: "Tropical",
            img:
                "https://dc621.4shared.com/img/RGUCzGa6jq/s24/18d8514aff0/2_bg?async&rand=0.276920552924802",
        },
        {
            title: "Clean",
            img:
                "https://dc621.4shared.com/img/29NGWIXFge/s24/18d8514c760/3_bg?async&rand=0.46909916956048714",
        },
        {
            title: "Citrus",
            img:
                "https://dc621.4shared.com/img/fhYQsfuiku/s24/18d8514d318/4_bg?async&rand=0.43882337881634426",
        },
        {
            title: "Blossom",
            img:
                "https://dc621.4shared.com/img/NMam7CScfa/s24/18d851490b0/1_bg?async&rand=0.10800176451065502",
        },
        {
            title: "Hand Gel 500",
            img:
                "https://dc564.4shared.com/img/AiPfW2eGjq/s24/18d6b141a00/img69?async&rand=0.12023796825415412",
        },
        {
            title: "Hand Gel 75",
            img:
                "https://dc564.4shared.com/img/M1oqlC32ku/s24/18d6b1425b8/img71?async&rand=0.759874864115774",
        },
        {
            title: "Shower Gel",
            img:
                "https://dc564.4shared.com/img/-28uUROVku/s24/18d6b12a6e8/shower?async&rand=0.924626491050728",
        },
    ]








    return(
       <div className='w-full flex flex-col justify-center items-center'>
           <div className='flex flex-col w-full relative items-center my-16 '>
               <div className='absolute right-0 h-[120px] w-[120px] mm:w-[100px] mm:h-[100px] smm:w-[80px] smm:h-[80px]'>
                   <img className='w-full h-full' src='https://dc614.4shared.com/img/AuMplJ3Mfa/s24/18d6a618728/r_online?async&rand=0.4161275649520968' alt='' />
               </div>
               <h2 className='text-[36px] font-medium mm:text-[30px] smm:text-[25px]'>Our Products</h2>
               <h4 className='text-[19px] text-[#505050] mt-4 mm:text-[16px] smm:text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa</h4>
               <h4 className='text-[19px] text-[#505050] mm:text-[16px] smm:text-[13px]'>laboriosam voluptates sed beatae?</h4>
           </div>
           <div className='w-[98%]  '>

               <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               loop={true}
               autoplay={{
                   delay: 2000,
                   disableOnInteraction: false,
               }}
               slidesPerView={'auto'}
               coverflowEffect={
                   {
                       rotate:0,
                       stretch:0,
                       depth:30,
                       modifier:3,
                   }
               }
               pagination={{el:'.pagination',clickable:true}}
               navigation={{
                   nextEl:'.button-next',
                   prevEl:'.button-prev'
               }}
               modules={[EffectCoverflow,Navigation,Pagination,Autoplay]}

               className='h-[230px]'


               >

                        {slider.map((e,index)=>{
                            return(
                                <SwiperSlide key={index} className='max-w-[150px] max-h-[200px]'>
                                      <img className='w-[150px] h-[190px] object-contain rounded-2xl '  src={e.img} alt='...'/>
                                      <h1 className='text-[18px] text-center w-full'> {e.title}</h1>
                                </SwiperSlide>
                            )
                        })}


               </Swiper>
               <div className='slider-controler  w-full buttom-2 flex justify-evenly items-end'>
                   <div className='button-prev cursor-pointer'>
                       {'<'}
                   </div>
                   <div className='pagination bottom-1 !w-fit text-center'></div>
                   <div className='button-next cursor-pointer'>
                       {'>'}
                   </div>
               </div>

           </div>
           <div className='w-full  h-[80px] my-8 flex justify-center items-center relative'>
               <div className='h-full w-[80px] absolute left-0 mm:w-[70px] mm:h-[95%] smm:w-[60px] smm:h-[85%]'>
                   <img className='w-full h-full' src='https://dc614.4shared.com/img/mAaXS5ppfa/s24/18d6a618340/istockphoto-1390873107-2048x20?async&rand=0.8205828453181803' alt='..'/>
               </div>
               <Link href='/' className='text-[#B31618] text-[26px]'>View All</Link>
           </div>
       </div>
    )
}

export default Products










































































