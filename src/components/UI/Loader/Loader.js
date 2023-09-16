import styled from 'styled-components';



function Loader({className=""}) {
  return (
         <div>
            Loading...
         </div>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Map */
    
    .Map-wrapper{
      /* width: var(--Map-content-width);
        margin-left: auto;
        margin-right: auto;  */

        iframe{   
          /* height: 44vh; */
        }

    }
`;

export default Loader;
