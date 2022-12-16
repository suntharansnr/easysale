import styled from 'styled-components';
import Input from '../UI/Input/Input';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';


const districtsSuggestion= [  
  'Ampara',
'Anuradhapura',
'Badulla',
'Batticaloa',
'Colombo',
'Galle',
'Hambantota', 
'Jaffna',
'Kaluta',
 'Kandy', 
 'Kegalle', 
 'Kilinochchi', 
'Kurunegala', 
 'Mannar', 
 'Matale', 
 'Matara', 
 'Monaragala', 
 'Mullaitivu',
'Nuwara Eliළිය',
'Polonnaruwa',
 'Puttalam',
 'Ratnapura',
 'Trincomalee', 
'Vavuniva', 
];





function Search({className="",searchFiledClassName,SearchIconClassName,ListItemClassName,SearchText="Search"}) {
  

  const [searchKeyword,setSearchKeyword]=useState('');
  const [searchList,setSearchList]=useState([]);

  const handleChange=(e)=>{
    
    const value=e.target.value;
    console.log(value);
    setSearchKeyword(value);
    
    if(value){
      // setSearchKeyword(value);
      const searchItem= districtsSuggestion.filter(suggestItem=>{
        return `${suggestItem.toLocaleLowerCase()}`.includes(value.toLocaleLowerCase())
      });

      console.log(searchItem);
      setSearchList(searchItem);
      
    }else{
      setSearchList([]);

    }

  };


  const handleClick=(e)=>{
    console.log(e.target?.classList[0]=='search-list-item');
    const SelectedSearchList=e.target?.classList[0]=='search-list-item';

    if(SelectedSearchList){
      setSearchKeyword(e.target.innerText);
      setSearchList([]);
      console.log(e.target.innerText);
    }

  };
  
  return (
    <DIV className={`${className}  background-aqu `} onClick={handleClick}>
      {console.log(searchKeyword ? searchKeyword:SearchText)}

      
        <div className="searchh-wrapper">

                <div className="display-flex "  className={`search-input-field display-flex ${searchFiledClassName}`} onChange={handleChange} >
                    <Input type="text"  value={searchKeyword} placeholder={SearchText}/>
                    <SearchIcon className='font-2-2'   className={`${SearchIconClassName}`}></SearchIcon>
                </div>

                <div className="suggestionList  ">
                  {
                    searchList.map(searchListItem=>(

                      <li  className={`search-list-item ${ListItemClassName}  li   cursor-p `}>{searchListItem}</li>
                    ))
                  }
                </div>
        </div>



    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .searchh-wrapper{
        width: 100%;
          /* position: relative; */
      }

        .search-input-field{
          box-shadow: 0px 1px 5px rgba(0, 0 ,0,0.1);
          
        }

        .suggestionList{

            /* position: absolute;
            border-bottom: none;
            border-top: none;
            z-index: 99;
            top: 100%;
            left: 0;
            right: 0;
            background:red; */


        }


  
`;

export default Search;


