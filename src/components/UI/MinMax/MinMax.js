import styled from 'styled-components';
import Input from '../Input/Input';



function MinMax({className="",minValuePlaceholder="1000",maxValuePlaceholder="500000",priceColVal1="Min",priceColVal2="Max"}) {
  return (
    <DIV className={`${className} background-white p-3 pt-2 border-radius-5`}>
         <div className="MinMax-wrapper">

             <div className="price-col-min">
                <div className="Min font-1-2">{priceColVal1}</div>
                <Input className='min-max-input  border-radius-5' type="Number" text={minValuePlaceholder}></Input>

             </div>

                <div className="text-center">-</div>

     
            <div className="price-col-max">  
                <div className="Min font-1-2 ">{priceColVal2}</div>
                <Input className='min-max-input  border-radius-5' type="Number" text={maxValuePlaceholder}></Input>

             </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .MinMax-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .price-col{
            .min-max-input{      
                border:2px solid red; 
            }
        }

    }
`;

export default MinMax;
