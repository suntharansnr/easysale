import styled from 'styled-components';
import StorePageComp from './StorePageComp';




function StorePage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="StorePage-wrapper">
                <StorePageComp></StorePageComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StorePage */
    
    .StorePage-wrapper{
      /* width: var(--StorePage-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default StorePage;
