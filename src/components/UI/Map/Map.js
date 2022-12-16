import styled from 'styled-components';



function Map({className=""}) {
  return (
         <iframe className={`w-100  h-100 ${className}`}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63163249791!2d79.7859926594978!3d6.92183350310426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1643826585760!5m2!1sen!2slk"  style={{border: 0}} allowFullScreen loading="lazy" />
    // <DIV className={`${className}`}>


    // </DIV>
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

export default Map;
