import React from 'react'

function Counter() {
    const counters = [
        {
            icon: "lni-layers",
            value: 8325,
            label: "Ad Posted"
        },
        {
            icon: "lni-users",
            value: 5487,
            label: "Members"
        },
        {
            icon: "lni-briefcase",
            value: 2012,
            label: "Premium Ads"
        },
        {
            icon: "lni-map",
            value: 200,
            label: "Locations"
        }
    ];
    return (
        <div>
            <section class="counter-section section-padding">
                <div class="container">
                    <div class="row">
                    {counters.map((counter, index) => (
                            <div className="col-md-3 col-sm-6 work-counter-widget" key={index}>
                                <div className="counter">
                                    <div className="icon"><i className={counter.icon}></i></div>
                                    <h2 className="counterUp">{counter.value}</h2>
                                    <p>{counter.label}</p>
                                </div>
                            </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter