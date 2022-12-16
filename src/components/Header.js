import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Topbar from './Topbar'
import { useLocation } from "react-router-dom"

function Header() {
    const curLocation = useLocation();
    return (
           <header id="header-wrap">
           <Topbar />
           <Navbar />
           { curLocation.pathname === '/' && <Hero /> }
        </header>
    )
}

export default Header