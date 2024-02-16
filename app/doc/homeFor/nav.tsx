'use client'
import React, {useContext, useState} from "react";
import {showNav} from "@/app/hook/showNav";
import Link from "next/link";
import {usePathname} from "next/navigation";


const NavHomeFor = ()=> {

    const [show,setShow] = useState(false)
    const handleShow = ()=>{
        show?setShow(false):setShow(true)
    }
    const path = usePathname()

    return (
        <div className='w-full  h-[600px] bg-[#bec5cb]  overflow-x-clip'>
            <div id='nav' className='h-[75px] w-full flex justify-between px-20 items-center border-b-[2px] border-[#e7dcda]'>
                <img src="https://dc596.4shared.com/img/ZcSQ0QYGku/s24/18d8a596578/navlogo?async&rand=0.3553563517365541"
                     alt='looding...'
                     className=' h-full max-w-[240px] w-auto smm:w-[150px] rounded-2xl z-20 '/>
                {show?
                    <svg className='cursor-pointer w-[40px] h-[40px] hover:w-[45px] hover:h-[45px]'
                         onClick={handleShow}
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Close"><g data-name="Layer 2"
                                                                                              fill="#fc1804"
                                                                                              className="color000000 svgShape"><path
                        d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                        data-name="close" fill="#fc1804" className="color000000 svgShape"></path></g></svg>
                    :<svg className='cursor-pointer ' onClick={handleShow}
                      xmlns="http://www.w3.org/2000/svg" fill='red' x="0px" y="0px" width="40" height="40"
                      viewBox="0 0 50 50">
                    <path
                        d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
                </svg>}
            </div>
            <div className='w-full h-[calc(100%-75px)] flex relative'>
                <div className='w-1/2 h-full flex flex-col justify-center pl-10'>
                    <h2 className="text-[48px] font-medium md:text-[40px] mm:text-[32px] smm:text-[20px] smm:mt-5">Keep Your Body</h2>
                    <h2 className="text-[48px] font-medium md:text-[40px] mm:text-[32px] smm:text-[20px]">And Skin Shiny</h2>
                    <h4 className="text-[19px] mt-4 smm:mt-1 text-[#505050] md:text-[16px] mm:text-[13px] smm:text-[11px]"> Lorem ipsum dolor sit amet  ipsum dolor sit amet </h4>
                    <h4 className="text-[19px] text-[#505050] md:text-[16px] mm:text-[13px] smm:text-[11px]"> elit. Ipsa laboriosam ipsum dolor sit amet </h4>
                    <button className='text-white bg-red-700 rounded-xl font-medium
                                       w-[170px] h-[42px] md:w-[160px]  mm:w-[120px] smm:w-[100px] smm:h-[32px] mt-10 smm:mt-5 flex justify-around items-center
                                       text-[20px] md:text-[18x] mm:text-[16px] smm:text-[14px]
                                       hover:bg-[#0000ff00] hover:text-red-500 ease-in-out duration-75 hover:flex-row-reverse'>
                        Show More <p>{">"}</p>
                    </button>
                </div>
                <div className={show?'w-1/2 h-full  translate-x-[50%] ease-in-out duration-500':' w-1/2 h-full translate-x-0 ease-in-out duration-500 flex justify-end'}>
                    <img className='w-[90%] h-full'
                        src='https://dc588.4shared.com/img/emcVmmN2ge/s24/18dae4355e8/slider_home_for_flib?async=&rand=0.06219135113772545' alt='...'/>
                </div>
                <div className={show?"w-1/2 h-full absolute right-0 translate-x-0 duration-500 ease-in-out bg-[#bec5cb]":'w-1/2 h-full translate-x-[100%] absolute right-0 duration-500 ease-in-out'}>
                    <div className='w-full  h-full p-20 flex flex-col items-end justify-around'>
                        <div className={'flex hover:text-red-500 hover:bg-gray-400 hover:shadow-2xl shadow-white rounded-2xl cursor-pointer justify-end items-center w-full group'}
                              >
                            <Link href='/page/home' className=' translate-x-0 group-hover:translate-x-[-100px] ease-in-out duration-500'>
                                Home
                            </Link>
                            <img className={'w-[20px] h-[20px] translate-x-[100px] group-hover:translate-x-[-90px] ease-in-out duration-500'}
                                 src='https://dc572.4shared.com/img/JtAnPW-9jq/s24/18dae6cabf0/pug?async&rand=0.10149462807910692' alt='..'/>
                        </div>
                        <div className='flex hover:text-red-500 hover:bg-gray-400 hover:shadow-2xl shadow-white rounded-2xl cursor-pointer justify-end items-center w-full group'>
                            <Link href='/page/homeTow' className=' translate-x-0 group-hover:translate-x-[-100px] ease-in-out duration-500'>
                                Product
                            </Link>
                            <img className={'w-[20px] h-[20px] translate-x-[100px] group-hover:translate-x-[-90px] ease-in-out duration-500'}
                                 src='https://dc572.4shared.com/img/JtAnPW-9jq/s24/18dae6cabf0/pug?async&rand=0.10149462807910692' alt='..'/>
                        </div>
                        <div className='flex hover:text-red-500 hover:bg-gray-400 hover:shadow-2xl shadow-white rounded-2xl cursor-pointer justify-end items-center w-full group'>
                            <Link href='/page/homeTh' className=' translate-x-0 group-hover:translate-x-[-100px] ease-in-out duration-500'>
                                About
                            </Link>
                            <img className={'w-[20px] h-[20px] translate-x-[100px] group-hover:translate-x-[-90px] ease-in-out duration-500'}
                                 src='https://dc572.4shared.com/img/JtAnPW-9jq/s24/18dae6cabf0/pug?async&rand=0.10149462807910692' alt='..'/>
                        </div>
                        <div className='flex hover:text-red-500 hover:bg-gray-400 hover:shadow-2xl shadow-white rounded-2xl cursor-pointer justify-end items-center w-full group'>
                            <Link href='/page/homeFor' className=' translate-x-0 group-hover:translate-x-[-100px] ease-in-out duration-500'>
                                Contact Us
                            </Link>
                            <img className={'w-[20px] h-[20px] translate-x-[100px] group-hover:translate-x-[-90px] ease-in-out duration-500'}
                                 src='https://dc572.4shared.com/img/JtAnPW-9jq/s24/18dae6cabf0/pug?async&rand=0.10149462807910692' alt='..'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavHomeFor