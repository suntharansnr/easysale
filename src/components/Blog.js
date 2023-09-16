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
        <section id="blog" class="section-padding">

            <div class="container">
                <h2 class="section-title">
                    Blog Post
                </h2>
                <div class="row">
                    {
                        blogs.length > 0 && (
                            blogs.map((row, key) => (
                                <div class="col-lg-4 col-md-6 col-xs-12 blog-item" key={key}>
                                    <Link to={`/blog/${row.slug}`}>
                                    <div class="blog-item-wrapper">
                                        <div class="blog-item-img">
                                            <a href="single-post.html">
                                            <img className="img-fluid" src={row.feature_img ? `${process.env.REACT_APP_API_URL}/uploads/images/thumbs/${row.feature_img['media_name']}` : `${process.env.REACT_APP_API_URL}/assets/img-not-found.jpg`} />
                                            </a>
                                        </div>
                                        <div class="blog-item-text">
                                            <div class="meta-tags">
                                                <span class="user float-left"><a href="#"><i class="lni-user"></i> Posted By {row.author}</a></span>
                                                <span class="date float-right"><i class="lni-calendar"></i> {row.created_at}</span>
                                            </div>
                                            <h3>
                                                <a href="single-post.html">{row.title}</a>
                                            </h3>
                                            <p>
                                                {row.post_content.length > 250 ?
                                                `${row.post_content.substring(0, 250)}` : row.post_content
                                                }
                                            </p>
                                            <a href="single-post.html" class="btn btn-common">Read More</a>
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