import CloseIcon from '@mui/icons-material/Close';
import NormalArrowLeft from './../Arrow/NormalArrow/NormalArrowLeft';
import styled from 'styled-components';
import LinkComp from '../Link/Link';
import { ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import { useDispatch } from 'react-redux';



function UndoPage(props) {
    const dispatch=useDispatch();

    const handleClick=()=>{
        dispatch(ShowHideAllFN())
    };

    

  return (


  <DIV className={`${props.className}  border-radius-5  `}>
    <div className="undoPage-wrapper ">

        <div className="display-flex align-item-center mb-4 ">

                      {/*   Is Link    */}
                     {props.to  && (   
                       <LinkComp to={props.to}>

                            <div className="left-btn text-left cursor-p" onClick={handleClick}>
                                        <NormalArrowLeft className='font-3-2 ' ></NormalArrowLeft>
                                </div>
                              
                       </LinkComp>

                      )
                        
                      }
                      {/*   Is Not Link    */}
                     {!props.to  && (   
                    
                            <div className="left-btn text-left cursor-p" onClick={handleClick}>
                                    <NormalArrowLeft className='font-3-2 ' ></NormalArrowLeft>
                            </div>

                      )
                        
                      }



                <div className="   mt-2 ms-2">
                        <h2 className="fw-bold ">{props.title}</h2>
                </div>

        </div>



                <div className="undo-page-content ">
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
    
    .undoPage-wrapper{

      min-height: 100vh;

    }
`;



export default UndoPage;
