import styled from 'styled-components';
import Location from '@mui/icons-material/LocationOn';
import Clock from '@mui/icons-material/WatchLater';
import { base_url } from '../../../utils';



function Ad({className="",adDetails}) {
  return (
    <DIV className={`${className}`}>
         <div className="Ad-wrapper">
                <div className="row">

                    <div className="col-12">
                        <img className='w-100' src={adDetails.feature_img ? base_url+`/uploads/images/thumbs/${adDetails.feature_img['media_name']}` : base_url+'/assets/img-not-found.jpg'} alt="" />
                    </div>

                    <div className="ad-details ps-4 pe-4 pb-4">

                                    <div className="font-2 mt-3  ad-name  ">{adDetails.title}</div>

                                            {/* Location */}
                                    <div className="text-color-grey-ori mt-2">
                                        <Location className=' font-2 '></Location>
                                        {adDetails.city+' >'}  {adDetails.district}
                                    </div>

                                            {/* Price  Section*/}
                                    <div className="  font-1-7 fw-bold mt-2  price-section">
                                            {adDetails.price}
                                    </div>


                                    <div className="text-color-grey-ori font-1-5 mt-3">
                                            {adDetails.description}
                                    </div>

                                    <div className="time-and-date mt-3 text-color-grey-ori display-flex align-items-center justify-content-end">
                                        <Clock/>
                                        <div className="font-1-3 ms-2">  {adDetails.created_at} </div>
                                    

                                    </div>
                    </div>


                    
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Ad */
    
    .Ad-wrapper{

        .ad-name{
                    @media(max-width:1000px){     
                        font-size: 1.5rem  !important;  
                }
            }
            
            .price-section{

                @media(max-width:900px){     
                    font-size: 1.4rem  !important;  
            
                }
                
        }
     

    }
`;

export default Ad;
