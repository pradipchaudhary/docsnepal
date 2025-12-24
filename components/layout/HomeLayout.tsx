import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative min-h-screen w-full bg-white'>
      <div className='relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default HomeLayout
