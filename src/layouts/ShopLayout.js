import styled from 'styled-components';
import OverlayFull from '../components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectClicks, SetShowPostAdFN, ShowLocationPopupFN, ShowMobileNavFN, ShowNearbyLocationPopUpFN } from '../Redux/slices/clickSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MobileNav from '../components/Overlay/MobileNav/MobileNav';

function ShopLayout() {

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

  return (
    <DIV className="App">
      <div className="app-wrapper">
          <div className="app-content" onClick={handleClick}>
            <Outlet />
          </div>
          <MobileNav showNav={clicks.showMobileNav} className={`w-35  p-3`}></MobileNav>
          {clicks.showOverlay && <OverlayFull></OverlayFull>}
      </div>
    </DIV>
  )
}

const DIV=styled.div`
    width: 100%;
    .app-wrapper{
      width: 100%;
      position: relative; 
      .app-content{
        width: var(--nav-footer-width); 
        margin: 0 auto; 
      }
    }
`;

export default ShopLayout

