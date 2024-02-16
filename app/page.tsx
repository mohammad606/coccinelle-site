'use client'

import React from 'react'
import {useRouter} from "next/navigation";

const Test = () => {
    const path = useRouter()

    return(
        <div className='w-[100wh] h-[100vh] relative'>
               <video className='w-full h-full'
                           autoPlay
                           muted
                           playsInline
                           onEnded={()=>{
                               path.replace('/page/home')
                           }}
                           src='https://pouch.jumpshare.com/preview/Pr1oWEC3RXj3kfn6M-ua5gV-bZrpwWMnyATYQtT0v7W6C6pLDIBmMrPJQ4fnRIia2UWqeH5HVnyR8XNAesbqZtwAErHIdKs5SVmp7ESz488IgnKzfgblBh0KPwFZypeqn9K8nCjSdmUPZOATNZYGHqN_fIMI2zJarj0avEcXWfs.mp4'>
               </video>



             <div className='absolute bg-white bottom-0 w-full h-[100px] md:h-[200px] mm:h-[300px] smm:h-[400px]'></div>
         </div>
    )



};

export default Test;
