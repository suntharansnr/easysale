import Axios from 'axios';
import React from 'react'
import Todo from '../practicecomponents/Todo';
import Reporttable from '../practicecomponents/Reporttable';
import Filter from '../practicecomponents/Filter';
import Slider from '../practicecomponents/Slider';
import Articles from '../practicecomponents/Articles';
import VideoPlayer from '../practicecomponents/VideoPlayer';
import Parent from '../practicecomponents/Parent';

function Practice() {
    return (
        <div>
            <div className='container-fluid'>
              {/* <Todo></Todo> */}
              {/* <Reporttable></Reporttable> */}
              <Filter></Filter>
              <Slider></Slider>
              <Articles></Articles>
              <Parent></Parent>
            </div>
        </div>
    )
}

export default Practice