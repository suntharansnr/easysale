import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CustomizePopUpShowList from './../CategoryPopUp/CustomizePopUpShowList';

import FilterDataName from '../../../Functions/FilterDataByName';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';

import { SetClassifedCategoryFN, ShowHideAllFN } from '../../../Redux/slices/clickSlice';




import PopUp from '../PopUp/PopUp';

const CategoryList=[

    {
      listTxt:"Matara",
        categoryIconSvg:<LocationIcon className="font-1-8 text-color-primary "></LocationIcon>,
      subCategories:[
          "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
      ] 
    },
    
    {
      listTxt:"Colombo",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
    ]
    },
    {
      listTxt:"Galle",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Gampaha",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
   
    {
      listTxt:"Home & Garden",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
    ]
    },
    {
      listTxt:"Animals",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "qqq",
    ]
    },
    {
      listTxt:"Education",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Food & Agriculture",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Services",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Others",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Hotel, Travels & Tours",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Jobs",
        categoryIconSvg:<LocationIcon className="font-1-9 text-color-primary "></LocationIcon>,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
  
   
  
  
  
  ];



function CategoryPopUp({className=""}) {

    const[SelectedSecondTextsArr,SetSelectedSecondTextsArr]=useState([]);
    const dispatch=useDispatch();




    const handleClick=(e)=>{

        const selectedTitleText=e.target?.closest('.first-list-item')?.querySelector('.first-list-item-text').innerText;
        const selectedSecondListItem=e.target?.closest('.second-list-item')?.innerText;


        if(selectedTitleText){ // selected title


            const selectedSecondTextsArr=FilterDataName(selectedTitleText,CategoryList)?.subCategories;
    
    
            SetSelectedSecondTextsArr(selectedSecondTextsArr);  // update selected second array
    
            document.querySelector('.PopUp-wrapper').scroll(0,0); //  scroll to top
    
        }
        // console.log(e.target);


        if(selectedSecondListItem){   // set selcted location to redux state
            dispatch( SetClassifedCategoryFN(selectedSecondListItem));
            dispatch(ShowHideAllFN());


            // console.log(selectedSecondListItem);
        }


    };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
           <PopUp to="/"  height={'default'}>
                    
                    <div className="title fw-bold font-1-8 text-color-primary">Select Location</div>

                    <CustomizePopUpShowList  CategoryList={CategoryList} secondList={SelectedSecondTextsArr}></CustomizePopUpShowList>

              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    

`;

export default CategoryPopUp;
