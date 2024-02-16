import Link from "next/link";


const Path = ()=>{


    return(
        <div className='text-white navShow:hidden text-[18px] font-bold  w-[50%] lg:w-1/2 mc:w-1/2 md:w-[70%] mm:w-[80%]
         z-30 flex flex-row justify-between items-center mr-16'>
            <Link href='/'
                className="w-[80px] h-[30px]  relative inline-flex items-center justify-center  overflow-hidden font-medium rounded-lg group hover:bg-gradient-to-br from-red-700 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400  ">
                  <span className="relative  transition-all ease-in duration-75  group-hover:text-[16px]  rounded-md group-hover:bg-opacity-0">
                        Home
                  </span>
            </Link>
            <Link href='/page/homeTow'
                  className="w-[80px] h-[30px]  relative inline-flex items-center justify-center  overflow-hidden font-medium rounded-lg group hover:bg-gradient-to-br from-red-700 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400   ">
                  <span className="relative  transition-all ease-in duration-75 group-hover:text-[16px]  rounded-md group-hover:bg-opacity-0">
                        About
                  </span>
            </Link>
            <Link href='/page/homeTh'
                  className="w-[80px] h-[30px]  relative inline-flex items-center justify-center  overflow-hidden font-medium rounded-lg group hover:bg-gradient-to-br from-red-700 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 ">
                  <span className="relative  transition-all ease-in duration-75 group-hover:text-[16px]  rounded-md group-hover:bg-opacity-0">
                        Products
                  </span>
            </Link>

            <Link href='/page/homeFor' className='text-[#a01415] bg-white rounded-lg px-3 py-1 hover:bg-gradient-to-br from-red-700 to-orange-400 hover:text-white ease-in-out duration-75'>Contact us</Link>
        </div>
    )
}

export default Path