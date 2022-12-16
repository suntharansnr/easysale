import styled from 'styled-components';



function TextArea({className="",placeholder="Description"}) {
  return (
    <DIV className={`${className} `}  rows="4" cols="50" placeholder={placeholder}>


    </DIV>
  );
}


const DIV=styled.textarea`
    width: 100%;



`;

export default TextArea;
