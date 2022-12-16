import styled from 'styled-components';



function ContactDeatilsItem({className="",label,detail,PlaceName=null,socialMedia=false}) {
  return (
    <DIV className={`${className} display-flex align-items-center`}>
          <div className="font-1-6 w-25 fw-bold">{label}</div>

         {!socialMedia &&  <div className="ms-2 w-75 mt-2 ">
               {PlaceName && <div className="font-1-6   ">{PlaceName},</div>}
               <div className="font-1-6 ">{detail}</div>

          </div>}


         {socialMedia && <div className="ms-2 w-75 ">
                <a className="font-1-6  cursor-p" href={detail.href}>{detail.displayLink}</a>

          </div>}


    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ContactDeatilsItem */
    color:#ccc;

      @media(max-width:472px){     
             flex-direction:column;

             .w-25{
              width: 93% !important;
             }
             .w-75{
               width: 89%!important;
             }
        }



`;

export default ContactDeatilsItem;
