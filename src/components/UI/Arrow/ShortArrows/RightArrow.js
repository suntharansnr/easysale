import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



function RightArrow({className=""}) {
  return (
    <ArrowForwardIosOutlinedIcon  className={`${className}`} ></ArrowForwardIosOutlinedIcon>

  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RightArrow */
    

`;

export default RightArrow;
