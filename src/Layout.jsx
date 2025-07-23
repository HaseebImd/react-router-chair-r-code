import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


const Layout = () => {
    return (
        <>
            <Header />
            <div className="container m-auto px-6 md:px-12 xl:px-6 py-16 bg-white min-h-[70vh]">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout
