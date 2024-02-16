'use client'
import {useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import PathTow from "@/app/share/nav/pathTow";


const Nav = ()=>{



    const [show ,setShow] = useState(false)

    const handleShowMnu = ()=>{
        show?setShow(false):setShow(true)
    }

    const pathUrl = usePathname()


    return (
        <div className='w-full h-[90px] absolute top-0 smm:h-[75px] flex flex-row justify-between '>


            <div className='w-3/12 ml-8 navShow:w-5/12 smm:!w-6/12  h-full  flex justify-between relative   z-30  items-center'>

                <img src="https://dc596.4shared.com/img/ZcSQ0QYGku/s24/18d8a596578/navlogo?async&rand=0.3553563517365541"
                     alt='looding...'
                     className=' w-full max-w-[240px]  h-full smm:w-[150px] rounded-2xl z-20 '/>
            </div>
            <div className='w-9/12 h-full flex justify-end items-center relative overflow-x-clip '>

                    <span className='z-40 mr-8  block navShow:block'>
                    <svg className='cursor-pointer ' onClick={handleShowMnu}
                         xmlns="http://www.w3.org/2000/svg" fill='red' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                         <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
                    </svg>
                </span>

                    <PathTow/>


                <div className='w-[250px] h-[380px] fixed top-[85px] right-[50px] smm:right-[10px]  bg-white rounded-2xl z-40
                               shadow-gray-500 shadow-2xl ease-in-out duration-300 p-10'
                     style={show?{transform:'translate(0, 0)'}:{transform:'translate(500px, 0)'}}> <div className='w-full h-full  flex flex-col justify-around border-r-2 border-black text-[21px]'>
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


export default Nav