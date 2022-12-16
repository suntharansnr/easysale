import styled from 'styled-components';
import FooterContactDetailsItem from './FooterContactDetailsItem';
import Map from '../../../components/UI/Map/Map';




function Footer({className="",storeData}) {
  return (
    <DIV className={`${className} background-yellow`}>
         <div className="Footer-wrapper row  gy-5 pt-5  ">


                {/* Details */}
                <div className="col-lg-6">
                            <FooterContactDetailsItem   className='mt-4  footer-detail-item' label={'Address'} PlaceName={storeData ? storeData.store_name : ''}    detail={storeData.shop_theme ? storeData.shop_theme.Footer_adress : ''} />
                            <FooterContactDetailsItem   className='mt-4  footer-detail-item' label={'E-mail'}  detail={storeData.shop_theme ? storeData.shop_theme.email_address : ''} />
                            <FooterContactDetailsItem   className='mt-4  footer-detail-item' label={'Mobile'}  detail={storeData.shop_theme ? storeData.shop_theme.Phone_number : ''} />
                   </div>

                  {/*Map  */}
                  <div className="col-lg-6 overflow-hidden">
                          <Map className=' border-radius-5 '></Map>
                  </div>




                   {/* CopyRight */}
                  <div className=" text-color-ccc col text-center ">
                  © {storeData.storeName}. All rights reserved. 
                            <span> | </span>
                        Copyright © 2018 SaleMe.lk PVT LTD 

                  </div>
         </div>
    </DIV>
  );
}


const DIV=styled.footer`
    width: 100%;
    min-height:57vh;
    background: #252122;


    display:flex; 
    flex-direction: row;
    
    
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Footer */
    
    .Footer-wrapper{
      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 
        /* background:yellow;  */

    }
`;

export default Footer;
