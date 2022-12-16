import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Faq() {
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        fetchFaqs()
    }, [])

    const fetchFaqs = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/faq`).then(({ data }) => {
            setFaqs(data['data']);
        })
    }

    return (
        <div>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="breadcrumb-wrapper">
                                <h2 class="product-title">FAQ</h2>
                                <ol class="breadcrumb">
                                    <li><a href="#">Home /</a></li>
                                    <li class="current">FAQ</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="faq section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="head-faq text-center">
                                <h2 class="section-title">Frequently Asked Questions</h2>
                            </div>

                            <div class="panel-group" id="accordion">
                                {
                                    faqs.length > 0 && (
                                        faqs.map((row, key) => (
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h4 class="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href={"#collapseOne" + key}>
                                                            {row.question}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id={"collapseOne" + key} class="panel-collapse collapse">
                                                    <div class="panel-body">
                                                        {row.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq