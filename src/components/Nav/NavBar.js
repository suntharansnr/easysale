import styled from 'styled-components';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

function NavBar({className=""}) {

  return (
    <NAV className={`${className} background-primary`}>
        <div className="Nav-wrapper  row  p-md-4 align-items-center">
                    <NavLeft className=' col-6  nav-left '></NavLeft>
                    <NavRight className='   col-6  width-800-display-none '></NavRight>               
        </div>
    </NAV>
  );
}


const NAV=styled.nav`

    /* z-index:10000; */
    z-index: 8800000;

.Nav-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

        .nav-left{
                @media(max-width:900px){     
                    width: 100%;
                }
        }

        .width-800-display-none{
              @media(max-width:900px){     
                          display: none !important;
            }

        }
    }
`;

export default NavBar;
