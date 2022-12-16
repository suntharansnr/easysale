import styled from 'styled-components';




import PopUp from '../PopUp/PopUp';




function CategoryPopUp({className=""}) {


  return (
    <DIV className={`${className}`} >
           <PopUp to="/"  height={'default'}>
                    
                    <div className="title fw-bold font-1-8 text-color-primary">Filter</div>

                      <div className="filtercol col-lg-3 p-3">

                      </div>

              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    

`;

export default CategoryPopUp;
