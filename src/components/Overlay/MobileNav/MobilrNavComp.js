import styled from 'styled-components';
import MobileNavItem from './MobileNavItem';
import Logo from './../../Logo/Logo';
import Button from '../../UI/Button/Button';


const navList=[
    {
        itemName:"All ads in Sri Lanka",
        Icon:<i className="fas fa-tags  font-1-8    " aria-hidden="true"></i>,
        link:"/allAds",
    },
    {
        itemName:"Login",
        Icon:<i className="fas fa-user  font-1-8    " aria-hidden="true"></i>,
        link:"/login",
    },
    {
        itemName:"Stay Safe",
        Icon:<i className="fas fa-shield-alt  font-1-8    " aria-hidden="true"></i>,
        link:"/",
    },
    {
        itemName:"FAQ",
        Icon:<i className="fas fa-question-circle  font-1-8    " aria-hidden="true"></i>,
        link:"/",
    },
    {
        itemName:"How to Sell fast",
        Icon:<i className="fas fa-money-bill  font-1-8    " aria-hidden="true"></i>,
        link:"/",
    },
    {
        itemName:"Download to sell fast",
        Icon:<i className="fas fa-play  font-1-8    " aria-hidden="true"></i>,
        link:"/",
    },
    {
        itemName:"More",
        Icon:<i className="fas fa-ellipsis-h  font-1-8    " aria-hidden="true"></i>,
        link:"/",
    },



];


function MobileNavComp({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="MobileNavComp-wrapper">

                <div className="logo w-75">
                            <Logo></Logo>
                </div>

                <div className="mobile-nav-list text-color-grey mt-4 pb-5">

                    {
                        navList.map(navitem=>(
                            <MobileNavItem  className='mt-3' svgIcon={navitem.Icon} ItemName={navitem.itemName}  link={navitem.link}  ></MobileNavItem>
                        ))
                    }

                </div>

                <div className="borttom  pt-5">
                        <div className="language-list display-flex justify-content-space-between">
                            <Button className="text-color-grey w-50 first-lang font-2  mobile-nav-link  "  >සිංහල</Button>
                            <Button className="text-color-grey w-50 font-2  mobile-nav-link  "  >தமிழ்</Button>
                        </div>
                </div>


         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only MobileNavComp */
    
    .MobileNavComp-wrapper{
      /* width: var(--MobileNavComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .language-list{
            border:1px solid var(--color-white);
            border-radius:5px; 

            .first-lang{
                border-right:1px solid var(--color-grey);
            }

            
        }


        .borttom{
            border-top:1px solid var(--color-grey);
        }

    }
`;

export default MobileNavComp;
