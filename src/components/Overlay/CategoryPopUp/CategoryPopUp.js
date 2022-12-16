import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FilterDataName from '../../../Functions/FilterDataByName';
import { SetClassifedCategoryFN, ShowHideAllFN } from '../../../Redux/slices/clickSlice';
import CustomizePopUpShowList from './CustomizePopUpShowList';


import Hotel from './../../../assets/svg/hotel.svg';

import Resturant from './../../../assets/svg/Resturant.svg';
import BookShop from './../../../assets/svg/bookShop.svg';
import StainoryIcon from './../../../assets/svg/stainoryIcon.png';
import JewelleryIcon from './../../../assets/img/jewellery.png';


import Saloon from './../../../assets/img/Saloon.png';
import Parlor from './../../../assets/img/Parlor.png';
import FoodCity from './../../../assets/img/foodCity.png';

import Bakery from './../../../assets/img/Bakery.png';
import FruiteShop from './../../../assets/img/fruiteShop.png';
import Vegitables from './../../../assets/img/vegitables.png';



import PopUp from '../PopUp/PopUp';

// const CategoryList=[
//     {
//         categoryName:"Hotel",
//         categoryIconSvg:<Hotel></Hotel>,
//         subCategories:[
//             "Resturant",
//             "Hotel",
//         ]
//     },
//     {
//         categoryName:"Resturant",
//         categoryIconSvg:<Resturant></Resturant>,
//         subCategories:[
//             "Maharagama",
//             "Kottawa",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Book Shop",
//         categoryIconSvg:<BookShop></BookShop>,
//         subCategories:[
//             "Book",
//             "Pencil",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Staionary Shop",
//         categoryIconSvg:<StainoryIcon></StainoryIcon>,
//         subCategories:[
//             "Staionary",
//             "Kottawa",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Jewelry",
//         categoryIconSvg:<JewelleryIcon></JewelleryIcon>,
//         subCategories:[
//             "Gold",
//             "Kottawa",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Saloon",
//         categoryIconSvg:<Parlor></Parlor>,
//         subCategories:[
//             "Hair Cut",
//             "Kottawa",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Food City",
//         categoryIconSvg:<FoodCity></FoodCity>,
//         subCategories:[
//             "Maharagama",
//             "Kottawa",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Bakery",
//         categoryIconSvg:<Bakery></Bakery>,
//         subCategories:[
//             "Bread",
//             "Kottawa",
//             "Piliyandala",
//             "Homagama",
//             "Dehiwala",
//             "EEEE",
//         ]
//     },
//     {
//         categoryName:"Fruite Shop",
//         categoryIconSvg:<FruiteShop></FruiteShop>,
//         subCategories:[
//             "Appple",
//             "Orange",
//             "Piliyandala",
//         ]
//     },
//     {
//         categoryName:"Vegetable Shop",
//         categoryIconSvg:<Vegitables></Vegitables>,
//         subCategories:[
//             "potato",
//             "Kottawa",
//             "Piliyandala",
//         ]
//     },
//     {
//         categoryName:"Vegetable Shop",
//         categoryIconSvg:<Vegitables></Vegitables>,
//         subCategories:[
//             "potato",
//             "Kottawa",
//             "Piliyandala",
//         ]
//     },
//     {
//         categoryName:"Vegetable Shop",
//         categoryIconSvg:<Vegitables></Vegitables>,
//         subCategories:[
//             "potato",
//             "Kottawa",
//             "Piliyandala",
//         ]
//     },
// ];

const CategoryList=[

    {
      listTxt:"Cars & Vehicles",
      categoryIconSvg:<i className="ion-model-s cat-ico   text-color-primary   font-1-9  " />,
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
      listTxt:"Electronics",
      categoryIconSvg:<i className="lnr lnr-laptop-phone cat-ico   text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
    ]
    },
    {
      listTxt:"Property",
      categoryIconSvg:<i className="ion-ios-home-outline cat-ico   text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Tractors",
          "Buses",
          "qqq",
    ]
    },
    {
      listTxt:"Fashion Health & Beauty",
      categoryIconSvg:<i className="ion-ios-home-outline cat-ico   text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="lnr lnr-sun cat-ico  text-color-primary font-1-9    " />,
      subCategories:[
           "Auto Parts & Accessories",
          "Motorbikes",
          "Auto Services",
          "Tractors",
    ]
    },
    {
      listTxt:"Animals",
      categoryIconSvg:<i className="ion-ios-paw-outline cat-ico  text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="lnr lnr-graduation-hat cat-ico  text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="lnr lnr-leaf linier-icon cat-ico  text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="ion-wrench cat-ico  text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="ion-ios-albums-outline cat-ico text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="ion-beer cat-ico  text-color-primary font-1-9    " />,
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
      categoryIconSvg:<i className="ion-briefcase cat-ico  text-color-primary font-1-9    " />,
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
                    
                    <div className="title fw-bold font-1-8 text-color-primary">Select Categorie</div>

                    <CustomizePopUpShowList  CategoryList={CategoryList} secondList={SelectedSecondTextsArr}></CustomizePopUpShowList>

              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    

`;

export default CategoryPopUp;
