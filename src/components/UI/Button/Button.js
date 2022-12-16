import styled from 'styled-components';



function Button(props) {
  return (
    <ButtonComp type="button"  className={`${props.className} btn`}   id={props.id}  border={props.border}>

                {props.children}  
    </ButtonComp>
  );
};


const ButtonComp=styled.button`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Button */

    border:${props => props.border? `1px solid black`:`none`};

    &:hover{
      /* color: var(--color-white);   */
     
    }
    
    .Button-wrapper{


    }
`;

export default Button;
