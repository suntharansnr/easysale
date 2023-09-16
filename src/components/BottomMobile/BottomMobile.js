import styled from 'styled-components';
import BottomMobileComp from './BottomMobileComp';

function BottomMobile({className=""}) {
  return (
    <DIV className={`${className}`}>
        <div className="BottomMobile-wrapper">
               <BottomMobileComp></BottomMobileComp>
        </div>
    </DIV>
  );
}


const DIV=styled.div`
        width: 100%;
        position:fixed;
        bottom:0;
        background-color: #f5f5f5;
        display: none; 

        @media(max-width:600px){     
                      display: flex;
        }

        .BottomMobile-wrapper{
            width:var(--page-content-width);
            margin-left: auto;
            margin-right: auto;
        }

`;

export default BottomMobile;
