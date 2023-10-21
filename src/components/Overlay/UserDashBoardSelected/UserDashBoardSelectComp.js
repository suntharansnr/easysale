import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import FilterDataName from '../../../Functions/FilterDataByName';
import { selectClicks, SetClassifedCategoryFN, ShowHideAllFN } from '../../../Redux/slices/clickSlice';

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

const CategoryList=[
    {
        categoryName:"Hotel",
        categoryIconSvg:<Hotel></Hotel>,
        subCategories:[
            "Resturant",
            "Hotel",
        ]
    },
    {
        categoryName:"Resturant",
        categoryIconSvg:<Resturant></Resturant>,
        subCategories:[
            "Maharagama",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Book Shop",
        categoryIconSvg:<BookShop></BookShop>,
        subCategories:[
            "Book",
            "Pencil",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Staionary Shop",
        categoryIconSvg:<StainoryIcon></StainoryIcon>,
        subCategories:[
            "Staionary",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Jewelry",
        categoryIconSvg:<JewelleryIcon></JewelleryIcon>,
        subCategories:[
            "Gold",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Saloon",
        categoryIconSvg:<Parlor></Parlor>,
        subCategories:[
            "Hair Cut",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Food City",
        categoryIconSvg:<FoodCity></FoodCity>,
        subCategories:[
            "Maharagama",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Bakery",
        categoryIconSvg:<Bakery></Bakery>,
        subCategories:[
            "Bread",
            "Kottawa",
            "Piliyandala",
            "Homagama",
            "Dehiwala",
            "EEEE",
        ]
    },
    {
        categoryName:"Fruite Shop",
        categoryIconSvg:<FruiteShop></FruiteShop>,
        subCategories:[
            "Appple",
            "Orange",
            "Piliyandala",
        ]
    },
    {
        categoryName:"Vegetable Shop",
        categoryIconSvg:<Vegitables></Vegitables>,
        subCategories:[
            "potato",
            "Kottawa",
            "Piliyandala",
        ]
    },
    {
        categoryName:"Vegetable Shop",
        categoryIconSvg:<Vegitables></Vegitables>,
        subCategories:[
            "potato",
            "Kottawa",
            "Piliyandala",
        ]
    },
    {
        categoryName:"Vegetable Shop",
        categoryIconSvg:<Vegitables></Vegitables>,
        subCategories:[
            "potato",
            "Kottawa",
            "Piliyandala",
        ]
    },
];



function CategoryPopUp({className=""}) {

    const[SelectedSecondTextsArr,SetSelectedSecondTextsArr]=useState([]);
    const dispatch=useDispatch();
    const clicks=useSelector(selectClicks);





  return (
    <DIV className={`${className}`} >
        {console.log(clicks.UserDashBoardSelectComp)}

           <PopUp to="/">
                    
                    <div className="title fw-bold font-1-8 text-color-primary">{clicks.UserDashBoardSelectedComp.compName}</div>



                            <div className="">
                                    {clicks.UserDashBoardSelectedComp.comp}
                            </div>

              </PopUp>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    

`;

export default CategoryPopUp;
