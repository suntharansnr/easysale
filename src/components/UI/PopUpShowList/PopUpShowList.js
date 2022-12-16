import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




function PopUpShowList({className="",locationList,secondList=['Maharagama','Piliyandala','Dehiwala','Kottawa',"Ampara",]}) {
  return (
    <DIV className={`${className}`}>
         <div className="category-section mt-4">
                      <div className="row">
                            <div className="col-7 ">



                                 { 
                                 locationList.map(categorieItem=>(
                                    <div className='categorie-item display-flex border-b align-item-center first-list-item'>
                                    
                                        <div className=' w-95 font-1-6  pb-3 pt-3 first-list-item-text '>{categorieItem.categoryName}</div>
                                        <div className="arrow-icon   w-5  ">
                                              <ArrowForwardIosIcon className='font-2 text-color-grey'></ArrowForwardIosIcon>
                                        </div>


                                    </div>
                                 ))
                                 }





                            </div>
                            <div className="col-5 ps-3">
                            { 
                                 secondList.map(categorieItem=>(
                                    <div className='categorie-item display-flex border-b '>
                                        <div className=' w-95 font-1-5  pb-2 pt-3 second-list-item'>{categorieItem}</div>
                                    </div>
                                 ))
                                 }
                            </div>
                      </div>
                    </div>


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PopUpShowList */
    
    /* width: var(--PopUpShowList-content-width);
      margin-left: auto;
      margin-right: auto;  */

      .border-b{
        border-bottom: 1px solid #e7edee;
      }

      .second-list-item{
        color: #5f5fb8;
        font-weight: bold;
      }

      .first-list-item-text{
        @media(max-width:454px){        
              font-size: 1.4rem;
        }

      }

      .arrow-icon{   

        @media(max-width:1108px){     
          width: 16% !important;
        }

      }

`;

export default PopUpShowList;
