import styled from 'styled-components';
import ShowMoreTxt from '../../../components/UI/ShowMoreTxt/ShowMoreTxt';

function ServicesSection({className="",services,sliceNum=-1}) {
  return (
    <DIV className={`${className} `}>
            <div className="ServicesSection-wrapper background-aqu ">

              <div className="services-section-row row justify-content-center">
                {
                    [...services.slice(sliceNum)].map(service=>(
                    <div className="Ad-item col-6 text-center box-shadow-normal ms-3 me-3 mt-2 mb-3 pt-5 pb-5 ps-3 pe-3">
                            <img className='border-radius-circle' src={'/'+service.img_path} alt="" />
                            <div className="">
                                <h3 className="title fw-bold  mt-5">{service.title}</h3>
                                <div className="description">
                                      <ShowMoreTxt className='text-center font-1-5 text-color-grey-ori' showMoreTextClassName={'text-color-black fw-bold '}  paragraph={service.content} words={20}/>
                                </div>
                            </div>

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
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ServicesSection */
    
    .ServicesSection-wrapper{
      width: var(--storeWidth);
        margin-left: auto;
        margin-right: auto; 
        

        .Ad-item{ 
              @media(max-width:700px){     
                width: 95%;
            }

        }

    }
`;

export default ServicesSection;
