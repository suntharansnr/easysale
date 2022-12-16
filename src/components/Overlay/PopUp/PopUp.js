import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';



function LinkComp(props) {
  return (


  <DIV className={`${props.className}    border-radius-5  background-white `} height={props.height}>
    <div className="PopUp-wrapper ">

                <div className="close-btn text-right">
                        <CloseIcon className='font-3-1 me-5 mt-4 '  id="closeIcon"></CloseIcon>
                </div>

                <div className="pop-up-content p-4 pt-0">
                      {props.children}  

                </div>

    </div>
  </DIV>

  );
}

const DIV=styled.div`

  width: 100%;
    /* margin-right: auto; 
    margin-left: auto; */
    
    .PopUp-wrapper{

      /* height: 92vh; */
      height:${props => props.height? `92vh`:``};

    }
`;



export default LinkComp;
