import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/UI/Loader/Loader';
import Breadcrumb from '../components/Breadcrumb';

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
            <Breadcrumb activePage="FAQ"/>

            <div class="faq section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="head-faq text-center">
                                <h2 class="section-title">Frequently Asked Questions</h2>
                            </div>

                            <div class="panel-group" id="accordion">
                                {
                                    faqs.length > 0 ? (
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
                                    ) : <Loader/>
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