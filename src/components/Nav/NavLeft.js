import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './../Logo/Logo';
import Link from '../UI/Link/Link';


function NavLeft({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="NavLeft-wrapper">
             <div className="row align-items-center">

                            <MenuIcon id="mobileNav-open-icon" className='mobile-nav-open-icon font-4-5  display-none text-color-white'></MenuIcon>
                           
                           
                            <div className="logo col-4 cursor-p">
                                <Link to="/">
                                    <Logo></Logo>
                                </Link>
                            </div>


                            <div className="col-8  display-flex width-800-display-none"> 
                                        <Link to="/allAds" className="  all-ads text-color-white ms-2 p-1 ms-5   fw-bold  font-1-6 a "   >  All Ads</Link>
                                        <Link to="/ " className="nav-left-link  ms-3 text-color-white p-1   fw-bold  font-1-6 a " >  සිංහල</Link>
                                        <Link to="/ " className="nav-left-link  ms-2 text-color-white p-1   fw-bold  font-1-6 a " >  தமிழ் </Link>
             

                            </div>

             </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavLeft */
    
    .NavLeft-wrapper{
      /* width: var(--NavLeft-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .logo{
            @media(max-width:900px){   
                margin-right: auto!important;
                margin-left: auto!important;  
                width: 29%;
                }

            @media(max-width:667px){     
                width: 35%;
                }

            @media(max-width:500px){     
                width: 42%;
                }
                
            }
            
            .mobile-nav-open-icon{
                @media(max-width:900px){     
                        display:flex !important;
                    }

        }

        .nav-left-link{
            border:1px solid var(--color-white);
            border-radius:3px; 
            /* padding: 0.1rem!important; */
        }

        .all-ads{
            border-radius:3px; 
            /* padding: 0.1rem!important; */
        }
    }
`;

export default NavLeft;
