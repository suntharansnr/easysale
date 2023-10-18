import React from 'react'
import { Outlet } from 'react-router-dom';
import Btop from '../components/Btop';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../assets/css/bootstrap.min.css';
import '../index.css';
import '../assets/fonts/line-icons.css';
import '../assets/css/slicknav.css';
import '../assets/css/color-switcher.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/main.css';
// import '../assets/css/yellow.css';
// import '../assets/css/green.css';
import '../assets/css/blue.css';
// import '../assets/css/cyan.css';
// import '../assets/css/purple.css';
import '../assets/css/responsive.css';
//editing the theme by raj
import '../assets/css/custom.css';
function AppLayout() {
  return (
    <>
    <Header />
        <Outlet />
    <Footer />
    <Btop />
  </>
  )
}

export default AppLayout

