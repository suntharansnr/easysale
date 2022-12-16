import { useEffect, useState } from 'react';
import styled from 'styled-components';


const cutText=(text,count,words)=>{

    const  numWordToDisplay = count;  //how many words u want to display 
    const  newArray =text.split(' ');

    if(newArray.length >= numWordToDisplay ){

            newArray.length = numWordToDisplay;
            return  newArray.join(' ') + `${count==words ? '...':''}`; 
    }else{
        return text;
    }
 
};


function ShowMoreTxt({
            className="",
            showMoreTextClassName="",
            paragraph,
            words,
            moreTxt="Show More",
            minimizedTxt="Show Less",
}) {

    const [count,SetCount]=useState(words);
    const [moreTxtMessage,SetmoreTxtMessage]=useState(moreTxt);

    const handleClick=()=>{

        const defaultParaghaphLenght=paragraph.split(" ").length;

        if(count==words){

            SetCount(defaultParaghaphLenght);
            SetmoreTxtMessage(minimizedTxt);
        }else{
            SetCount(words);
            SetmoreTxtMessage(moreTxt);
            
        }
    };



  return (
    <DIV className={`${className}`}>
                {cutText(paragraph,count,words)}
                <span  className={`${showMoreTextClassName}  ms-2 cursor-p`}  onClick={handleClick}>{moreTxtMessage}</span>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ShowMoreTxt */
    span{
        font-size:inherit;
    }
    
`;

export default ShowMoreTxt;
