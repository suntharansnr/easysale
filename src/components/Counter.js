import React from 'react'

function Counter() {
    return (
        <div>
            <section class="counter-section section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-md-3 col-sm-6 work-counter-widget">
                            <div class="counter">
                                <div class="icon"><i class="lni-layers"></i></div>
                                <h2 class="counterUp">8325</h2>
                                <p>Ad Posted</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6 work-counter-widget">
                            <div class="counter">
                                <div class="icon"><i class="lni-users"></i></div>
                                <h2 class="counterUp">5487</h2>
                                <p>Members</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6 work-counter-widget">
                            <div class="counter">
                                <div class="icon"><i class="lni-briefcase"></i></div>
                                <h2 class="counterUp">2012</h2>
                                <p>Premium Ads</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6 work-counter-widget">
                            <div class="counter">
                                <div class="icon"><i class="lni-map"></i></div>
                                <h2 class="counterUp">200</h2>
                                <p>Locations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Counter