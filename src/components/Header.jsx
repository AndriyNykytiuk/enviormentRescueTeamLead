import React from 'react'
import Logo from '../img/logo.svg'
const Header = () => {
  return (
    <>
    <section className=' min-h-24 bg-[#163f6b] p-5'>
        <div className=' flex items-center justify-center mb-15'>
            <img className=' w-30 h-30' src={Logo} alt="Image"/>
        </div>
        <div className='flex items-center justify-center text-[#ffffff]'>
          <p >  система обліку всякого непотрібу </p>
        </div>
    </section>
    
    </>
  )
}

export default Header