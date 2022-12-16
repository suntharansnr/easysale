import styled from 'styled-components';

const loremParagraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloribus velit nostrum dicta doloremque odio placeat veniam laboriosam neque recusandae accusamus assumenda, quam voluptatibus, aperiam, facere pariatur! Error, enim! Neque in facilis magni eius expedita velit tempore recusandae consequatur architecto perspiciatis modi debitis, accusamus, iste dicta eligendi esse, officiis sapiente!                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis autem magnam enim temporibus, incidunt iste facere suscipit aperiam nobis nesciunt voluptatum accusamus reprehenderit aut, rerum sapiente perferendis expedita facilis amet nisi, quod cumque. Voluptas ullam blanditiis inventore enim dolorum dicta atque eligendi temporibus accusantium voluptatum pariatur, asperiores officia itaque sit.';

function DummyTxtPage({className="",text=loremParagraph,title="Title"}) {
  return (
    <DIV className={`${className}`}>
         <div className="DummyTxtPage-wrapper ">
             <h1 className="title text-center">{title}</h1>
               <div className="text-center mt-5">{text}</div> 
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    min-height:100vh;
    display:flex;
    /* flex-direction:column; */
    
    .DummyTxtPage-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */
        /* min-height:100%; */

    }
`;

export default DummyTxtPage;
