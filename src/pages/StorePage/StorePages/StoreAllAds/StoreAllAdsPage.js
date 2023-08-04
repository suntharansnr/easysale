import styled from 'styled-components';
import RecentAds from '../StoreHome/RecentAds/RecentAds';

function StoreAllAds({className="",store,AllAds=68}) {
  return (
    <DIV className={`${className}`}>
         <div className="StoreAllAds-wrapper">
            <div className="mt-5 pb-4">
                        <h2 className='fw-bold text-center  font-2-3'> All Ads From {store.store_name} </h2>
                              <div className="ads-count text-center font-1-6 text-color-grey-light"> <span className='fw-bold'>{store.ads ? store.ads.length : 0}</span>  Ads From <span className='fw-bold'>{AllAds} Ads</span> </div>
                        <RecentAds className=' mt-6 ' AllAds={store.ads ? store.ads : ''} sliceNum={0}></RecentAds>
              </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only StoreAllAds */
    
    .StoreAllAds-wrapper{
      /* width: var(--StoreAllAds-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default StoreAllAds;
