import styled from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



function CloseBtn({className=""}) {
  return (
    <DIV>
            <CloseOutlinedIcon className={`${className}`}></CloseOutlinedIcon>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
`;

export default CloseBtn;
