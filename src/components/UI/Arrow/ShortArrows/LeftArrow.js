import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';


function RightArrow({className=""}) {
  return (
    <ArrowBackIosOutlinedIcon  className={`${className}`} ></ArrowBackIosOutlinedIcon>
    );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RightArrow */
    

`;

export default RightArrow;
