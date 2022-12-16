import { useSelector } from 'react-redux';
import styled from 'styled-components';
import StoreNav from '../../../pages/StorePage/StorePageNav/StoreNav';

import { selectClicks } from '../../../Redux/slices/clickSlice';



function StorePageMobileNav({className="",ShowstoreMobileNav=false}) {

    const clicks=useSelector(selectClicks);

  return (
    <DIV className={`w-35  p-3 ${className}`}  ShowstoreMobileNav={ShowstoreMobileNav}>
         <div className="StorePageMobileNav-wrapper p-3">
             <h2 className='text-color-secondary  text-center fw-bold'> {clicks?.storeMobileNav?.storeName} </h2>
         <StoreNav className='store-mobile-nav  background-aqu'   ></StoreNav>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    border-radius: 0% 8% 8% 0%;
    transition: all .2s;
    position: fixed;
    top: 0%;
    left: 0;
    background: rgb(37,33,34); 
    height: 100vh; 
    z-index: 888888888;
    
    transform: ${props => props.ShowstoreMobileNav? 'translateX(0%)' : 'translateX(-117%)'  };
    transition: .2s  transform;
    
    


          @media(max-width:600px){     
                      width: 48% !important;
          }
          @media(max-width:437px){     
                      width: 60% !important;
          }
          @media(max-width:345px){     
                      width: 70% !important;
          }




    
    .StorePageMobileNav-wrapper{

        .store-mobile-nav{
            nav{
                flex-direction:column;

                &>*{
                    /* background: red;  */
                    margin-top: 1.5rem!important;
                     font-size: 2rem;

                }

                img{
                    display:none;
                }
            }
        }

    }
`;

export default StorePageMobileNav;
