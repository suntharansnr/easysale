import styled from 'styled-components';
import CheckBoxColumn from './CheckBoxColumn';



function CheckBoxSection({className="",data}) {
  return (
    <DIV className={`${className}`}>

        <div className="row gy-2">

            {
                data.map(checkitem=>(

                    <div className="col-xl-4 col-6">
                        <CheckBoxColumn text={checkitem}></CheckBoxColumn>
                    </div>
                ))
            }



        </div>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only CheckBoxSection */
    
    .CheckBoxSection-wrapper{
      /* width: var(--CheckBoxSection-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default CheckBoxSection;
