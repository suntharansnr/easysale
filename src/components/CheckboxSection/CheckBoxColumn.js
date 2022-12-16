import styled from 'styled-components';



function CheckBoxColumn({className="",text="txt"}) {
  return (
    <DIV className={`${className} display-flex align-items-center`}>

        <input type="checkbox" className='cursor-p'  id={text}   />
        <label htmlFor={text}  className='cursor-p ms-2  font-inherit'> {text} </label>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
`;

export default CheckBoxColumn;
