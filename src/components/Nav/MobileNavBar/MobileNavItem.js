import styled from 'styled-components';
import {Link} from 'react-router-dom';



function MobileNavItem({className="",SvgIcon,text}) {
  return (
    <DIV className={`${className}`}>

         <div className="MobileNavItem-wrapper text-center text-color-grey">
             <Link to="" className='a'>
                {SvgIcon}
                <div className="font-1-5">{text}</div>
             </Link>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: yellow;  */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MobileNavItem */
    
    .MobileNavItem-wrapper{
      /* width: var(--MobileNavItem-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default MobileNavItem;
