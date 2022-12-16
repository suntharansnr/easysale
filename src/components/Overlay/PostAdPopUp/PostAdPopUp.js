import styled from 'styled-components';
import PopUp from './../PopUp/PopUp';
import Input from '../../UI/Input/Input';
import FilterSelect from './../../UI/SelectJs/FilterSelect';
import TextArea from './../../UI/TextArea/TextArea';
import FIleUpload from './../../UI/FileUpload/FIleUpload';
import Button from '../../UI/Button/Button';

import CheckBoxSection from '../../CheckboxSection/CheckBoxSection';

const data=[
    "Air Conditioning",
    "Lawn",
    "Swimming Pool",
    "Barbeque",
    "Microwave",

    "Air Conditioning",
    "Lawn",
    "Swimming Pool",
    "Barbeque",
    "Microwave",
];



function PostAdPop({className=""}) {

  
  return (
    <DIV className={`${className}`}>
         <div className="PostAdPop-wrapper">
                <PopUp  height={'default'}>

                    <div className="mt-4 post-ad- pb-5">


                                {/* Post Title */}
                            <label htmlFor="" className='font-1-2 fw-bold text-color-grey-ori'>Post Title</label>
                            <Input border={true} className="p-1 margin-t-0.4"></Input>



                            {/* Categorei  */}
                            <div className="dropdown  mt-3">

                            <label  className="font-1-2 fw-bold text-color-grey-ori" htmlFor="">Category</label>
                            <FilterSelect 
                                        className={"p-3 margin-t-0.4"}
                                        DropDownListItemclassName={"p-2"}
                                        selectedColor={"var(--color-grey-2)"}
                                        filterList={["MobilePhone","Tv","Radio"]}
                                        filterDefaultSelectedText={"MobilePhone"}
                                        ShowListProp={false}
                                        border={true}

                            ></FilterSelect>
                            
                            </div>

                            {/* Ad Type */}
                            <div className="dropdown mt-4">

                            <label  className="font-1-2 fw-bold text-color-grey-ori" htmlFor="">Ad Type </label>
                            <FilterSelect 
                                        className={"p-3 margin-t-0.4"}
                                        DropDownListItemclassName={"p-2"}
                                        selectedColor={"var(--color-grey-2)"}
                                        filterList={["Classified","Tv","Radio"]}
                                        filterDefaultSelectedText={"Classified"}
                                        ShowListProp={false}
                                        border={true}

                            ></FilterSelect>

                            </div>

                            {/* Description */}
                            <div className="description  mt-4">
                                    <label  className="font-1-2 fw-bold text-color-grey-ori" htmlFor="">Description </label>
                                    <TextArea className="textarea textarea-description p-3 margin-t-0.4">
                                    </TextArea>
                            </div>


                            {/* File Upload */}
                            <div className="mt-3 ">

                                    <label htmlFor="" className='font-1-2 fw-bold text-color-grey-ori '>Post Image</label>
                                    <div className="drag-drop  border-radius-5  cursor-p">
                                            <FIleUpload   className='h-100'></FIleUpload>

                                    </div>
                            </div>


                            {/* Checkbox Section */}
                            <div className="mt-5">
                                        <label htmlFor="" className='font-1-2 fw-bold text-color-grey-ori '>Amenities</label>
                                        <CheckBoxSection data={data}></CheckBoxSection>
                            </div>


                            <Button className="font-1-5 background-primary text-white fw-bold mt-5">Submit Post</Button>


                    </div>



                </PopUp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only PostAdPop */
    
    .PostAdPop-wrapper{
        
        .post-ad-{
            width: 60%;
              margin-left: auto;
              margin-right: auto; 

              @media(max-width:600px){     
                  width: 89% !important;
              }

        }


        .drag-drop{
            height: 30vh;
            border:1px solid var(--color-grey);

        }


        
    }


    .margin-t-0.4{
         margin-top: -0.4rem;
     }
`;

export default PostAdPop;
