import React from 'react'
import { Outlet } from 'react-router-dom';
import Btop from '../components/Btop';
import Footer from '../components/Footer';
import Header from '../components/Header';

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

