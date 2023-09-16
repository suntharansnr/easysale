import React, { useState } from 'react'

function Slider() {
    const slides = [
        {
            title: "Today's workout plan",
            text: "We're gonna do 3 fundamental exercises."
        },
        {
            title: "First, 10 push-ups",
            text: "Do 10 reps. Remember about full range of motion. Don't rush."
        },
        {
            title: "Next, 20 squats",
            text: "Squats are important. Remember to keep your back straight."
        },
        {
            title: "Finally, 15 sit-ups",
            text: "Slightly bend your knees. Remember about full range of motion."
        },
        {
            title: "Great job!",
            text: "You made it, have a nice day and see you next time!"
        }
    ];

    const slide_length = slides.length;
    const [index,setIndex]=useState(0);


    return (
        <div>
            <div className='container-fluid bg-dark text-white p-4'>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => setIndex(0)}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={index == 0 ? true : false} onClick={() => setIndex(index-1)}>Prev</button>
                <button data-testid="button-next" className="small" disabled={index == slide_length - 1 ? true : false} onClick={() => setIndex(index+1)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
        </div>
    )
}

export default Slider