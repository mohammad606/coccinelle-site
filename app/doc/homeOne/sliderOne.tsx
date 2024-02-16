'use client'


import React,{useContext} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay,EffectFade } from 'swiper/modules';
import {usePathname} from "next/navigation";
import {showNav} from '@/app/hook/showNav'
import Link from "next/link";

const SliderOne = ()=>{
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
    const context = useContext(showNav)

   const pathUrl = usePathname()

    return(
        <div className='w-full h-[600px] 2xl:h-[calc(100vh-90px)]  mm:h-[450px] smm:h-[250px] flex relative overflow-x-clip'>
            <div className='absolute w-[200px] left-0 h-full bg-[#bec5cb]'></div>

            <Swiper
                slidesPerView={1}
                spaceBetween={200}

                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination,Autoplay]}
                className={context.nav?'mySwiper w-full h-full relative group ease-in-out duration-700 translate-x-[-350px]':'mySwiper translate-x-0 w-full h-full relative group ease-in-out duration-500'}

            >
                {
                    img.map((e,index)=>{

                        return(
                            <SwiperSlide key={index} className='h-full w-full'>
                                <img src={e.img} alt={`e.id`} className={context.nav?' h-full w-full ':'object-cover  h-full w-full '}/>
                            </SwiperSlide>
                        )
                    })
                }



            </Swiper>
            <div className={context.nav?'hidden':"absolute w-full h-4/6 flex top-1/2 !z-30"} style={{ transform: 'translate(0%, -50%)' }}>
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

            <div className={context.nav?' h-full absolute right-0 w-[350px] bg-white   ease-in-out duration-700 translate-x-0':' translate-x-[400px] bg-white w-0  ease-in-out duration-500'}>
                <div className=' h-[calc(100%-160px)] mx-10 my-20 flex flex-col justify-between border-black border-r-2 '>
                    <div className='group flex justify-between items-center h-[50px] cursor-pointer'>
                        <Link href='/' className={pathUrl == '/page/home'?'text-red-600 font-medium ':'font-medium group-hover:text-red-600 group-hover:pl-2 '}>Home</Link>
                        <img className={pathUrl == '/page/home'?`w-[30px] h-[30px] block group-hover:block`:'w-[30px] h-[30px] hidden group-hover:block'}  src='https://dc772.4shared.com/img/AuMplJ3Mfa/s24/18d6a618728/r_online?async&rand=0.5187510229048982' alt='..'/>
                    </div>
                    <div className='group flex justify-between items-center h-[50px] cursor-pointer'>
                        <Link href='/page/homeTow' className={pathUrl == '/page/homeTow'?'text-red-600 font-medium':'font-medium group-hover:text-red-600 group-hover:pl-2'}>About</Link>
                        <img className={pathUrl == '/page/homeTow'?`w-[30px] h-[30px] block group-hover:block`:'w-[30px] h-[30px] hidden group-hover:block'}  src='https://dc772.4shared.com/img/AuMplJ3Mfa/s24/18d6a618728/r_online?async&rand=0.5187510229048982' alt='..'/>
                    </div>
                    <div className='group flex justify-between items-center h-[50px] cursor-pointer'>
                        <Link href='/page/homeTh' className={pathUrl == '/page/homeTh'?'text-red-600 font-medium':'font-medium group-hover:text-red-600 group-hover:pl-2'}>Products</Link>
                        <img className={pathUrl == '/page/homeTh'?`w-[30px] h-[30px] block group-hover:block`:'w-[30px] h-[30px] hidden group-hover:block'}  src='https://dc772.4shared.com/img/AuMplJ3Mfa/s24/18d6a618728/r_online?async&rand=0.5187510229048982' alt='..'/>
                    </div>
                    <div className='group flex justify-between items-center h-[50px] cursor-pointer'>
                        <Link href='/page/homeFor' className={pathUrl == '/page/homeFor'?'text-red-600 font-medium':'font-medium group-hover:text-red-600 group-hover:pl-2'}>Contact us</Link>
                        <img className={pathUrl == '/Contact'?`w-[30px] h-[30px] block group-hover:block`:'w-[30px] h-[30px] hidden group-hover:block'}  src='https://dc772.4shared.com/img/AuMplJ3Mfa/s24/18d6a618728/r_online?async&rand=0.5187510229048982' alt='..'/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SliderOne