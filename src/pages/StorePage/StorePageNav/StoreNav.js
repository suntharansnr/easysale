import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Link from '../../../components/UI/Link/Link';

const links=["Home","AllAds","Services","Contact","privacyPolicy","AboutUs"];



function StoreNav({className="",id="",store}) {
  return (
    <DIV className={`${className}`}  id={id}>
       <nav className="display-flex justify-content-center align-items-center    ">
           {
               links.map(linkitem=>(
                   <NavLink  to={`/${store}/${linkitem}`} key={Math.random()}   activeClassName="active"   className="ms-3  a font-1-7  ps-2 pe-2 text-color-grey-ori">{linkitem}</NavLink>

               ))
           }

             <Link to="">
                 <img className=' ms-3 w-50  ' src={"https://www.saleme.lk/premium_assets/frontend/images/saleme-logo.png"} alt="" />
             </Link>

       </nav>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreNav */
 

    .active{
      border-bottom: 3px solid var(--color-secondary);
      transition:all .3s; 
    }
    
 
`;

export default StoreNav;
