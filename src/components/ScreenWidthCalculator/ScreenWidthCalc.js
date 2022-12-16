import styled from 'styled-components';



function ScreenWidthCalculator({className=""}) {
  return (
    <DIV className={`${className}`}>
          {/* TEMPORY  WIDTH*/}
          <div className="">
            window width  {document.documentElement.clientWidth}
        </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ScreenWidthCalculator */
    
    .ScreenWidthCalculator-wrapper{
      /* width: var(--ScreenWidthCalculator-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default ScreenWidthCalculator;
