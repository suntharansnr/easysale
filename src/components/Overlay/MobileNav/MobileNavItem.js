import styled from 'styled-components';
import Link from './../../../components/UI/Link/Link';



function MobileNavItem({className="",svgIcon,ItemName,link}) {
  return (
    
    <Link to={link} className="mobile-nav-link">
          <DIV className={`${className} display-flex align-items-center `}>
             {svgIcon}
             <div className="font-2 ms-3">{ItemName}</div>
          </DIV>
      </Link>
                
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MobileNavItem */
    


`;

export default MobileNavItem;
