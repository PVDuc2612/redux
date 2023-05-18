'use client'


import Image from 'next/image'

const Logo = () => {

    return (
        <Image 
            alt="Logo"
            className='hidden md:block cursor-pointer'
            height="100"
            width="100"
            src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png"
        />
    )
}
export default Logo
