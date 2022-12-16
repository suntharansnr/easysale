import styled from 'styled-components';
import MobileNavItem from './MobileNavItem';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';


function MobileNavBar({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MobileNavBar-wrapper display-flex pt-2">
                <MobileNavItem   SvgIcon={<HomeIcon className='font-2-5' ></HomeIcon>} text={"Home"}></MobileNavItem>
                <MobileNavItem   SvgIcon={<SearchIcon className='font-2-5' ></SearchIcon>} text={"Search"}></MobileNavItem>
                <MobileNavItem   SvgIcon={<AddIcon className='font-2-5 post-add-icon text-color-white' ></AddIcon>} text={"Post an ad"}></MobileNavItem>
                <MobileNavItem   SvgIcon={<ChatBubbleOutlineRoundedIcon className='font-2-5' ></ChatBubbleOutlineRoundedIcon>} text={"Message"}></MobileNavItem>
                <MobileNavItem   SvgIcon={<PermIdentitySharpIcon className='font-2-5' ></PermIdentitySharpIcon>} text={"Profile"}></MobileNavItem>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MobileNavBar */
    /* bottom: 0;    */

    position: fixed;
    bottom: 0;
    z-index: 1;
    left: 0;
    background: var(--color-white);
    border-top: 2px solid var(--color-grey);     
    display: none;

    @media(max-width:600px){
      display: flex;
    }
    
    .MobileNavBar-wrapper{
      width: var(--page-content-width);   
        margin-left: auto;
        margin-right: auto; 


        .post-add-icon{  
          /* background: red;   */
            border:2px solid var(--color-primary);
            background: var(--color-primary);
            border-radius: 50%;  
            /* box-sizing: content-box;   */
        }

    }
`;

export default MobileNavBar;
