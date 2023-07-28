import Axios from 'axios';
import React from 'react'
import Todo from '../practicecomponents/Todo';
import Reporttable from '../practicecomponents/Reporttable';
import Filter from '../practicecomponents/Filter';

function Practice() {
    return (
        <div>
            <div className='container-fluid'>
              {/* <Todo></Todo> */}
              {/* <Reporttable></Reporttable> */}
              <Filter></Filter>
            </div>
        </div>
    )
}

export default Practice