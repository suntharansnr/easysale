import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {  selectClicks, ShowHideAllFN } from '../../Redux/slices/clickSlice';
import MobileNav from './MobileNav/MobileNav';
import LocationPopUp from './LocationPopUp/LocationPopUp';
import CategoryPopUp from './CategoryPopUp/CategoryPopUp';
import PostAdPopUp from './PostAdPopUp/PostAdPopUp';
import FilterPopUp from './Filter/FilterPopUp';
import UserDashBoardSelectComp from './UserDashBoardSelected/UserDashBoardSelectComp';
import NearbyLocationPopUp from './NearbyLoacationPopUp/NearbyLoacationPopUp';




function Overlay({className=""}) {

  const dispatch=useDispatch();
  const clicks=useSelector(selectClicks);



  const handleClick=(e)=>{

    console.log((e.target.classList[0]=='Overlay-wrapper'));

    
    let IsSelectOverlay=(e.target.querySelector('.Overlay-wrapper')?.classList[0]=='Overlay-wrapper');

    if(!IsSelectOverlay){
      IsSelectOverlay=(e.target.classList[0]=='Overlay-wrapper');
    }


    const closeBtn=e.target.closest('#closeIcon');

    

    if(IsSelectOverlay){ // hide mobile nav and overlay
        // dispatch(HideMobileNavFN());
        dispatch(ShowHideAllFN());
    }
    if(closeBtn){ // hide mobile nav and overlay
        dispatch(ShowHideAllFN());
    }

  };


  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="Overlay-wrapper cursor-p h-100">
             {/* {clicks.showMobileNav &&  <MobileNav  className=' w-35 mobile-navv p-3'></MobileNav>} */}
             {/* <MobileNav showNav={clicks.showMobileNav} className={`w-35 mobile-navv p-3 ${clicks.showMobileNav?'mobile-nav-transalate-normal':''}`}></MobileNav> */}

             {clicks.showLocationPopUp &&    <LocationPopUp className='w-65  overlay-inside-popup  ms-auto me-auto mt-5'></LocationPopUp>}
             {clicks.showCategoryPopUp &&    <CategoryPopUp className='w-65  overlay-inside-popup  ms-auto me-auto mt-5'></CategoryPopUp>}
             {clicks.showPostAd &&    <PostAdPopUp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></PostAdPopUp>}
             {clicks.classifiedPagefilter &&    <FilterPopUp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></FilterPopUp>}
             {clicks.showNearbyLocationPopUp &&    <NearbyLocationPopUp className='w-40 overlay-inside-popup-post-ad    ms-auto me-auto mt-auto  mt-22'></NearbyLocationPopUp>}
             {/* {clicks.UserDashBoardSelectedComp && document.documentElement.clientWidth>600 &&    <UserDashBoardSelectComp className='w-65  overlay-inside-popup-post-ad  ms-auto me-auto mt-5'></UserDashBoardSelectComp>} */}
     
     
     
             {/* {clicks.showMobileNav &&    <LocationPopUp className='w-65 ms-auto me-auto mt-5'></LocationPopUp>}
             {clicks.showMobileNav &&    <LocationPopUp className='w-65 ms-auto me-auto mt-5'></LocationPopUp>} */}

          
            
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    height: 100%;  
    background: #00000091;  
    position: absolute;
    top: 0;
    left: 0; 
    z-index: 99999995;
    
    .Overlay-wrapper{
      /* width: var(--Overlay-content-width);
        margin-left: auto;
        margin-right: auto;  */
        /* margin-top: 5rem; */

        .mobile-navv{
          transition: all .2s;

          @media(max-width:600px){     
                      width: 48% !important;
          }
          @media(max-width:437px){     
                      width: 60% !important;
          }
          @media(max-width:345px){     
                      width: 70% !important;
          }


        }


        /* .mobile-nav-transalate-normal{
            transform: translateX(0%);
            transition: .2s all;
          } */


        .overlay-inside-popup{
              @media(max-width:609px){     
                          width: 92% !important;
            }
            
          }
          
          .overlay-inside-popup-post-ad{
                @media(max-width:903px){     
                  width: 91% !important;
              }

        }

     

    }
`;

export default Overlay;
