import React from 'react'

function Works() {
    return (
        <section className="works section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-title">How It Works?</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="works-item">
                            <div className="icon-box">
                                <i className="lni-users"></i>
                            </div>
                            <p>Create an Account</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="works-item">
                            <div className="icon-box">
                                <i className="lni-bookmark-alt"></i>
                            </div>
                            <p>Post Free Ad</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="works-item">
                            <div className="icon-box">
                                <i className="lni-thumbs-up"></i>
                            </div>
                            <p>Deal Done</p>
                        </div>
                    </div>
                    <hr className="works-line"/>
                </div>
            </div>
        </section>
    )
}

export default Works