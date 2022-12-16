import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



function FilterSelectTitle({className="",selectedName,showList}) {

  return (
    <DIV IsShowList={showList} className={`${className}  selected-name cursor-p  border-radius-5 display-flex justify-content-space-between align-item-center background-white overflow-hidden`}  >
         
         
            <div className="font-1-3">{selectedName}</div>        
            <KeyboardArrowDownIcon className='arrow-icon'></KeyboardArrowDownIcon>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

        .selected-name{
            background: var(--color-white);

            .arrow-icon{   
                transform:  ${props => props.IsShowList? 'rotate(180deg)': 'rotate(0deg)'};
                transition: all .3s;    
            }
        }
        
`;

export default FilterSelectTitle;
