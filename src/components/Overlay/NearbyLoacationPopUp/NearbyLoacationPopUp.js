import styled from 'styled-components';
import Search from '../../Search/Search';
import Button from '../../UI/Button/Button';
import PopUp from './../../../components/Overlay/PopUp/PopUp';
import FilterSelect from './../../../components/Select/Select';

import LocationIcon from '@mui/icons-material/FmdGoodOutlined';



function NearbyLocationPopUp({className=""}) {
  return (
    <DIV className={`${className}  `}>
                    <PopUp to="/"   >

                        <div className="NearbyLocationPopUp-wrapper ps-4 pe-4  h-100">

                                        {/* Nearby Location  Title*/}
                                    <div className="display-flex">

                                            <LocationIcon className='font-2-5 text-color-primary'></LocationIcon>
                                            <h2>Nearby Location</h2>
                                    </div>

                                    {/* Search Here */}
                                    <Search   
                                        className='border-grey-light border-radius-5 mt-4 '
                                        searchFiledClassName=""
                                        SearchIconClassName="font-2-5"
                                        ListItemClassName=""
                                        SearchText="Search Here"/>


                                        {/* nearby km */}
                                        <div className="mt-4">

                                                <div className=" row  justify-content-between ">

                                                            <div className="col-8">
                                                                    <FilterSelect 
                                                                            selectedColor="#80808021" 
                                                                            className='filter-select  border-grey-light h-100 '  
                                                                            filterSectionTitle={"Price Range"} 
                                                                            optionList={[
                                                                                "1 Km - 3Km",
                                                                                "3 Km - 10Km",
                                                                                "10 Km - 20Km",
                                                                                "20 Km - 50Km",
                                                                            ]} 
                                                                            filterDefaultSelectedText={"Date:Newest on top"} 
                                                                            DropDownListItemclassName="p-2 font-1-5">

                                                                    </FilterSelect>

                                                            </div>

                                                            <div className="col-4">
                                                                     <Button  className="background-primary text-color-white font-1-5  w-100">Submit</Button>

                                                            </div>


                                                </div>


                                        </div>


                        </div>

                    </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NearbyLocationPopUp */
    
    .NearbyLocationPopUp-wrapper{
       

    }
`;

export default NearbyLocationPopUp;
