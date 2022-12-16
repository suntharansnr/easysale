import styled from 'styled-components';
import LogoImg from './../../assets/logo/nav.png';



function Logo({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Logo-wrapper">
                <img src={LogoImg} className="w-100" alt="" />

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Logo */
    
    .Logo-wrapper{
        width: 100%;


    }
`;

export default Logo;
