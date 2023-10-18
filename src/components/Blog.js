import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/blog`).then(({ data }) => {
            setBlogs(data['data']);
        })
    }

    return (
        <section id="blog" className="section-padding">

            <div className="container">
                <h2 className="section-title">
                    Blog Post
                </h2>
                <div className="row">
                    {
                        blogs.length > 0 && (
                            blogs.map((row, key) => (
                                <div className="col-lg-4 col-md-6 col-xs-12 blog-item" key={key}>
                                    <Link to={`/blog/${row.slug}`}>
                                    <div className="blog-item-wrapper">
                                        <div className="blog-item-img">
                                            <a href="single-post.html">
                                            <img className="img-fluid" src={row.feature_img ? `${process.env.REACT_APP_API_URL}/uploads/images/thumbs/${row.feature_img['media_name']}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} />
                                            </a>
                                        </div>
                                        <div className="blog-item-text">
                                            <div className="meta-tags">
                                                <span className="user float-left"><a href="#"><i className="lni-user"></i> Posted By {row.author}</a></span>
                                                <span className="date float-right"><i className="lni-calendar"></i> {row.created_at}</span>
                                            </div>
                                            <h3>
                                                <a href="single-post.html">{row.title}</a>
                                            </h3>
                                            <p>
                                                {row.post_content.length > 250 ?
                                                `${row.post_content.substring(0, 250)}` : row.post_content
                                                }
                                            </p>
                                            <a href="single-post.html" className="btn btn-common">Read More</a>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog