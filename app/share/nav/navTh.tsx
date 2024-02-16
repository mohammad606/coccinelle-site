'use client'
import {useContext, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {showNav} from "@/app/hook/showNav";


const NavTh = ()=>{

    const [show ,setShow] = useState(false)
    const context = useContext(showNav)
    const handleShowMnu = ()=>{
        context.nav?context.setNav(false):context.setNav(true)
    }

    const pathUrl = usePathname()


    return (
        <div className='w-full h-[90px] absolute top-0 left-0 smm:h-[75px] flex flex-row overflow-x-clip'>

            <div className='w-[250px] ml-6 justify-center  z-30 rounded-[100px] flex items-center'>
                <img src="https://dc596.4shared.com/img/ZcSQ0QYGku/s24/18d8a596578/navlogo?async&rand=0.3553563517365541"
                     alt='looding...'
                     className='w-full h-full rounded-2xl z-20  '/>
            </div>
            <div className='w-full h-full flex justify-end items-center '>

                    <span className='z-30 mr-12 block'>
                    <svg className={context.nav?'hidden':'block cursor-pointer '} onClick={handleShowMnu}
                         xmlns="http://www.w3.org/2000/svg" fill='red' x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                         <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
                    </svg>
                        <svg className={context.nav?'block hover:w-[45px] hover:h-[45px] ease-in-out duration-200 z-50 w-[40px] h-[40px] cursor-pointer':'hidden'}
                             onClick={handleShowMnu}
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Close"><g data-name="Layer 2"
                                                                                                  fill="#fc1804"
                                                                                                  className="color000000 svgShape"><path
                            d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                            data-name="close" fill="#fc1804" className="color000000 svgShape"></path></g></svg>
                </span>


            </div>
        </div>
    )




}


export default NavTh