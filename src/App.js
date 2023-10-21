import * as React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import List from "./components/listing";
import Singlead from "./pages/Singlead";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Singleblog from "./pages/Singleblog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { useEffect } from "react";
import SearchScreen from "./pages/SearchScreen";
import Dashboard from "./pages/Dashboard";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import PaymentInfo from "./pages/PaymentInfo";
import Myads from "./pages/Myads";
import ProductCreateScreen from "./components/ProductCreateScreen";
import Stores from "./pages/Stores";
import Mystores from "./pages/Mystores";
import AppLayout from "./layouts/AppLayout";
import ShopLayout from "./layouts/ShopLayout";
import StorePage from "./pages/StorePage/StorePage";

import StorePageMobileNav from './components/Overlay/StoreMobilePageNav/StorePageMobileNav'

import { selectClicks, SetShowPostAdFN, ShowLocationPopupFN, ShowMobileNavFN, ShowNearbyLocationPopUpFN } from './Redux/slices/clickSlice';
import { useDispatch, useSelector } from "react-redux";
import Membership from "./pages/Membeship";
import OrderScreen from "./pages/OrderScreen";
import ProductEditScreen from "./components/ProductEditScreen";
import Report from "./pages/Report";
import Practice from "./pages/Practice";
import Slides from "./practicecomponents/Slider";
import DefaultPage from "./pages/DefaultPage";
import Register from "./pages/Register";

function App() {

  const clicks = useSelector(selectClicks);
  const dispatch = useDispatch();

  useEffect(() => {

    // scroll to top
    window.scroll(0, 0);

    // turn off scroling opend mobile nav bar
    const html = document.querySelector('html');
    html.style.overflowY = `${clicks.showOverlay ? 'hidden' : 'initial'}`;

  }, [clicks.showOverlay]);


  const handleClick = (e) => {
    const mobileNavOpenIcon = e.target.closest('#mobileNav-open-icon');
    const LocationIcon = e.target.closest('.show-btn-location');
    const NearbyLocationIcon = e.target.closest('.show-btn-nearby-location');
    const PostAdMobileBottom = e.target.closest("#Post-ad-mobile");

    if (mobileNavOpenIcon) {
      dispatch(ShowMobileNavFN());
    }
    if (LocationIcon) {
      dispatch(ShowLocationPopupFN());
    }
    if (PostAdMobileBottom) {
      dispatch(SetShowPostAdFN());
    }
    if (NearbyLocationIcon) {
      dispatch(ShowNearbyLocationPopUpFN());
    }
  };

  return (<Router>
    <Routes>
      <Route path='/' exact element={<AppLayout />} >
        <Route exact path='*' element={<DefaultPage/>} />
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/about-us' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/packages' element={<Packages />} />
        <Route exact path='/testimonial' element={<Testimonials />} />
        <Route exact path='/faq' element={<Faq />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register/>} />

        <Route exact path='/product/:id' element={<Singlead />} />
        <Route path="/product/create" element={<ProductCreateScreen />} />
        <Route path="/product/edit/:productId" element={<ProductEditScreen />} />
        <Route exact path='/listing' element={<List />} />

        <Route exact path='/stores' element={<Stores />} />

        <Route exact path='/blog/:slug' element={<Singleblog />} />

        <Route
          path="/search/name/:name"
          element={<SearchScreen />}
        />
        <Route
          path="/search/category/:category"
          element={<SearchScreen />}
          exact
        />
        <Route
          path="/search/category/:category/name/:name"
          element={<SearchScreen />}
          exact
        />
        <Route
          path="/search/category/:category/district/:district/name/:name"
          element={<SearchScreen />}
          exact
        />
        <Route
          path="/search/category/:category/sub_category/:sub_category/brand/:brand/district/:district/city/:city/name/:name/min_price/:min_price/max_price/:max_price/rating/:rating/order/:order/pageNumber/:pageNumber"
          element={<SearchScreen />}
          exact
        />

        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/reports' element={<Report />} />
        <Route exact path='/my-stores' element={<Mystores />} />
        <Route exact path='/favorite' element={<Favorite />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/payments' element={<Payment />} />
        <Route exact path='/payment-info/:productId' element={<PaymentInfo />} />

        <Route
          path="/membership-packages"
          element={<Membership />}
        />

        <Route exact path="/order/:orderId" element={<OrderScreen />} />

        <Route
          path="/my-ads"
          element={<Myads />}
        />
        <Route
          path="/my-ads/status/:status"
          element={<Myads />}
        />
        <Route
          path="/my-ads/status/:status/pageNumber/:pageNumber"
          element={<Myads />}
        />
        <Route
          path="/my-ads/name/:name"
          element={<Myads />}
        />
        <Route
          path="/search/category/:category"
          element={<Myads />}
          exact
        />
        <Route
          path="/search/category/:category/name/:name"
          element={<Myads />}
          exact
        />
        <Route
          path="/search/category/:category/sub_category/:sub_category/brand/:brand/district/:district/city/:city/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
          element={<Myads />}
          exact
        />
      </Route>
      {/* StorePage */}
      <Route exact path="/store/:store/" element={<ShopLayout />} >
        <Route exact path="*" element={
          <>
            {/* TEMPORY  WIDTH*/}
            {/* <ScreenWidthCalcComp></ScreenWidthCalcComp> */}
            <StorePage></StorePage>
            <StorePageMobileNav ShowstoreMobileNav={clicks.storeMobileNav} ></StorePageMobileNav>
          </>
        } />
      </Route>
      <Route exact path='/practice' element={<Practice/>} />
      <Route exact path='/slider' element={<Slides  />} />
    </Routes>
  </Router>);
}

export default App;