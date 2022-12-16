import styled from 'styled-components';
import Ad from '../../../Ad/Ad';



function RecentAds({className="",columnSizeClassName="",AllAds,sliceNum=-1}) {
  return (
    <DIV className={`${className}`}>
         <div className="RecentAds-wrapper">


             <div className="all-ads-container row justify-content-between gy-5" >
                {
                    [...AllAds.slice(sliceNum)].map(ad=>(
                        <div key={Math.random()} className={`ad-col col-3 p-0 ms-3 me-3 mt-4 mb-3 ${columnSizeClassName}`}>
                                <Ad  className='cursor-p' adDetails={ad}></Ad>
                        </div>
                    ))
                }

             </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only RecentAds */
    
    .RecentAds-wrapper{
      width: var(--storeWidth);
      margin-left: auto;
      margin-right: auto; 
      
      
      .all-ads-container{
        
        .ad-col{
            box-shadow: 0 2px 16px 0 rgba(0,0,0,0.1);
            width: 29%;
    
            @media(max-width:657px){     
               width: 45%;
          }
            @media(max-width:448px){     
              width: 71%;
          }
            @media(max-width:326px){     
              width: 84%;
          }
          
        }
        
        .ad-col-3{
          width: 23%;
          flex: 0 0 auto;


          
                @media(max-width:657px){     
                  width: 45%;
              }
                @media(max-width:448px){     
                  width: 71%;
              }
                @media(max-width:326px){     
                  width: 84%;
              }
        }


          @media(max-width:448px){     
            flex-direction: column;
            align-items: center;
            }


        }

    }
`;

export default RecentAds;
