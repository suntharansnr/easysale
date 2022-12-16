import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosNewOutlined';



function ArrowLeft({className=""}) {
  return (
    <DIV className={` ArrowLeft border-radius-circle  ${className} `}>
            <ArrowLeftIcon className='Arrow-icon font-2'></ArrowLeftIcon>
    </DIV>
  )
}


const DIV=styled.div`
    width: 100%;
    height: auto;   
    /* height: 50px;   */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    background:#ffffffa3;  
    

        display: flex;  
        align-items: center;
        justify-content: center;  

        .arrow-icon{

        }

`;

export default ArrowLeft;
