import styled from 'styled-components';
import Button from '../UI/Button/Button';
import Link from '../UI/Link/Link';



function NavRight({className=""}) {
  return (
    <DIV className={`${className} `}>
         <div className="NavRight-wrapper">
                    <div className="display-flex align-item-center   ">

                                <Button className=" ms-auto text-color-white">
                                        <i className="fas fa-comments font-1-8" /><span className="Mobile ms-2 font-1-7  width-800-display-none">Chat</span>
                                </Button>

                                <Link to="/login " className="text-color-white ms-3">
                                      <i className="fas fa-user font-1-8" /><span className="Mobile ms-2  font-1-7  width-800-display-none">Login</span>
                                </Link>

                              
                                <Link to="/dashBoard/PostAd" className="">

                                    <Button className=" background-secondary ms-4 p-3 width-800-display-none">
                                        <div className="fw-bold"> Post Your Add</div>
                                    </Button>

                                </Link>


                    </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 100%; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavRight */
    
    .NavRight-wrapper{
      /* width: var(--NavRight-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default NavRight;
