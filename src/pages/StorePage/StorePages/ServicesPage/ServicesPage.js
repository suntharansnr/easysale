import styled from 'styled-components';
import ServicesSection from '../../ServicesSection/ServicesSection';

function ServicesPage({className="",store}) {
  return (
    <DIV className={`${className}`}>
         <div className="ServicesPage-wrapper">
                <div className="mt-6 pb-4  cursor-p">
                            <h2 className='fw-bold text-center  font-2-3'> Our Services  </h2>
                            <ServicesSection className='mt-4' services={store.services ? store.services : ''}></ServicesSection>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .ServicesPage-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default ServicesPage;
