import styled from 'styled-components';



function Input(props) {
  
  return (
         <InputComp  type={props.type}  className={` input ${props.className} `}   placeholder={props.placeholder} value={props.value} border={props.border}>
            {console.log(props.placeholder)}
        </InputComp>

  );
}



const InputComp=styled.input`
    width: 100%;
    border:${props => props.border? `1px solid black`:`none`};


`;

export default Input;
