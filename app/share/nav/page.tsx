'use client'

import {useContext, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {showNav} from '@/app/hook/showNav'

const NavBar = ()=>{

    const [show ,setShow] = useState(false)
    const context = useContext(showNav)
    const handleShowMnu = ()=>{
        context.nav?context.setNav(false):context.setNav(true)
    }
    const pathUrl = usePathname()


    return (
        <div className='w-full h-[90px] smm:h-[75px] flex flex-row relative overflow-x-clip'>

            <div className='w-[80px] relative'>

            </div>
            <div className='w-[250px]   z-30 rounded-[100px] flex items-center'>

                <img src="https://dc596.4shared.com/img/ZcSQ0QYGku/s24/18d8a596578/navlogo?async&rand=0.5404893592088591"
                     alt='looding...'
                     className='w-[180px] h-full rounded-2xl'/>
            </div>
            <div className='w-full h-full flex justify-end items-center  '>

                <span className='z-30 mr-12 block  '>
                    <svg className='cursor-pointer ' onClick={handleShowMnu}
                        xmlns="http://www.w3.org/2000/svg" fill='#ff0000' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                         <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
                    </svg>
                </span>

                <div className='w-[250px] h-[380px] absolute top-[85px] right-[50px] smm:right-[10px]  bg-white rounded-2xl z-40
                               shadow-gray-500 shadow-2xl ease-in-out duration-300 p-10'
                     style={show?{transform:'translate(0, 0)'}:{transform:'translate(500px, 0)'}}>
                    <div className='w-full h-full  flex flex-col justify-around border-r-2 border-black text-[21px]'>
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
        </div>
    )
}

export default NavBar





