'use client'
import {BsMinecartLoaded} from 'react-icons/bs'
import Image from 'next/image'




const Usermenu = () => {


    return (
        <div className="relative">
            <div className="flex flex-row text-center gap-3">
                <div
                     className="hidden
                                md:block
                                text-[25px] 
                                font-semibold 
                                py-3 
                                px-4 
                                rounded-full 
                                hover:bg-neutral-100 
                                transition 
                                cursor-pointer"
                >
                    <BsMinecartLoaded />
                </div>
                <div 
                     className="
                                px-2
                                text-[20px]
                                border-neutral-200 
                                flex 
                                flex-row 
                                items-center 
                                gap-3 
                                shadow-sm
                                border-[1px]
                                rounded-full 
                                cursor-pointer 
                                transition"
                >
                    <div className='hidden md:block'>
                        <Image 
                            className='rounded-full'
                            alt="avatar"
                            src="https://znews-photo.zingcdn.me/w660/Uploaded/rohunaa/2023_05_05/344580290_1297809834278297_55457.jpg"
                            height="30"
                            width="30"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Usermenu
