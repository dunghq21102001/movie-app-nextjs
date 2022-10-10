import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row md-5 justify-between items-center h-auto'>
            <div>
                <HeaderItem />


            </div>
            <Image className='object-contain' width={100} height={100} src='https://img.pikbest.com/png-images/20211018/colorful-alphabet-d-with-mandala-design_6151614.png!bw700' alt='' />
        </header>
    )
}

export default Header