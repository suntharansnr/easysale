import styled from 'styled-components';



function Select({className="",optionList=[]}) {
  return (
    <DIV className={`${className}`}>
         <div className="Select-wrapper w-100  font-1-3  h-100">
                <select name=" " id=" " className='w-100 h-100'>
                    {
                        optionList.map(option=>(

                            <option key={Math.random()} value="  font-1-5">{option}</option>
                        ))
                    }
                    {/* <option value="saab  font-1-3">Saab</option>
                    <option value="opel  font-1-3">Opel</option>
                    <option value="audi  font-1-3">Audi</option> */}
                </select>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Select */
    
    .Select-wrapper{
        select{
            border: none;

            &:focus-visible{
                outline: none; 
            }
        }

    }
`;

export default Select;
