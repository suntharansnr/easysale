import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Singleblog() {
  const navigate = useNavigate();

  const { slug } = useParams()

  const [blog, setBlog] = useState([])
  const [related, setRelated] = useState([])

  useEffect(() => {
      fetchProduct()
  }, [])

  const fetchProduct = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`).then(({ data }) => {
          setBlog(data['post'])
          setRelated(data['related_ads'])
      })
  }

  return (
    <div>
      <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="breadcrumb-wrapper">
                <h2 class="product-title">Blog Details</h2>
                <ol class="breadcrumb">
                  <li><a href="#">Home /</a></li>
                  <li class="current">Blog Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content" class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-xs-12">

              <div class="blog-post single-post">

                <div class="post-thumb">
                  <a href="#"><img class="img-fluid" src="assets/img/blog/blog1.jpg" alt=""/></a>
                  <div class="hover-wrap">
                  </div>
                </div>


                <div class="post-content">
                  <h2 class="post-title"><a href="single-post.html">{blog.title}</a></h2>
                  <div class="meta">
                    <span class="meta-part"><a href="#"><i class="lni-user"></i> Clasihub</a></span>
                    <span class="meta-part"><a href="#"><i class="lni-alarm-clock"></i> June 21, 2018</a></span>
                    <span class="meta-part"><a href="#"><i class="lni-folder"></i> Sticky</a></span>
                    <span class="meta-part"><a href="#"><i class="lni-comments-alt"></i> 1 Comments</a></span>
                  </div>
                  <div class="entry-summary">
                    {blog.post_content}
                  </div>
                </div>

              </div>


              <div id="comments">
                <div class="comment-box">
                  <h3>Comments</h3>
                  <ol class="comments-list">
                    <li>
                      <div class="media">
                        <div class="thumb-left">
                          <a href="#">
                            <img class="img-fluid" src="assets/img/blog/user1.jpg" alt=""/>
                          </a>
                        </div>
                        <div class="info-body">
                          <div class="media-heading">
                            <h4 class="name">Larsen Mortin</h4>
                            <span class="comment-date"><i class="lni-alarm-clock"></i> June 21, 2018</span>
                            <a href="#" class="reply-link"><i class="lni-reply"></i> Reply</a>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nemo ipsam eum illo minus voluptatibus ipsa nulla, perferendis aliquid aperiam beatae nihil sapiente eaque atque nesciunt perspiciatis ex saepe, quibusdam..</p>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div class="media">
                            <div class="thumb-left">
                              <a href="#">
                                <img class="img-fluid" src="assets/img/blog/user2.jpg" alt=""/>
                              </a>
                            </div>
                            <div class="info-body">
                              <div class="media-heading">
                                <h4 class="name">Albert Johnes</h4>
                                <span class="comment-date"><i class="lni-alarm-clock"></i> June 21, 2018</span>
                                <a href="#" class="reply-link"><i class="lni-reply"></i> Reply</a>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nemo ipsam eum illo minus voluptatibus ipsa nulla, perferendis aliquid aperiam beatae nihil sapiente eaque atque nesciunt perspiciatis ex saepe, quibusdam..</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="media">
                        <div class="thumb-left">
                          <a href="#">
                            <img class="img-fluid" src="assets/img/blog/user3.jpg" alt=""/>
                          </a>
                        </div>
                        <div class="info-body">
                          <div class="media-heading">
                            <h4 class="name">Steven Hawkins</h4>
                            <span class="comment-date"><i class="lni-alarm-clock"></i> June 21, 2018</span>
                            <a href="#" class="reply-link"><i class="lni-reply"></i> Reply</a>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nemo ipsam eum illo minus voluptatibus ipsa nulla, perferendis aliquid aperiam beatae nihil sapiente eaque atque nesciunt perspiciatis ex saepe, quibusdam..</p>
                        </div>
                      </div>
                    </li>
                  </ol>

                  <div id="respond">
                    <h2 class="respond-title">Leave A Comment</h2>
                    <form action="#">
                      <div class="row">
                        <div class="col-lg-6 col-md-6 col-xs-12">
                          <div class="form-group">
                            <input id="author" class="form-control" name="author" type="text" value="" size="30" placeholder="Your Name"/>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xs-12">
                          <div class="form-group">
                            <input id="email" class="form-control" name="author" type="text" value="" size="30" placeholder="Your E-Mail"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-md-12col-xs-12">
                          <div class="form-group">
                            <textarea id="comment" class="form-control" name="comment" cols="45" rows="8" placeholder="Massage..."></textarea>
                          </div>
                          <button type="submit" id="submit" class="btn btn-common">Post Comment</button>
                        </div>
                      </div>
                    </form>
                  </div>

                </div>
              </div>

            </div>

            <aside id="sidebar" class="col-lg-4 col-md-12 col-xs-12 right-sidebar">

              <div class="widget_search">
                <form id="search-form">
                  <input type="search" class="form-control" autocomplete="off" name="s" placeholder="Search..." id="search-input" value=""/>
                    <button type="submit" id="search-submit" class="search-btn"><i class="lni-search"></i></button>
                </form>
              </div>

              <div class="widget categories">
                <h4 class="widget-title">All Categories</h4>
                <ul class="categories-list">
                  <li>
                    <a href="#">
                      <i class="lni-dinner"></i>
                      Hotel &amp; Travels <span class="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-control-panel"></i>
                      Services <span class="category-counter">(8)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-github"></i>
                      Pets <span class="category-counter">(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-coffee-cup"></i>
                      Restaurants <span class="category-counter">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-home"></i>
                      Real Estate <span class="category-counter">(4)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-pencil"></i>
                      Jobs <span class="category-counter">(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="lni-display"></i>
                      Electronics <span class="category-counter">(9)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="widget widget-popular-posts">
                <h4 class="widget-title">Recent Posts</h4>
                <ul class="posts-list">
                  <li>
                    <div class="widget-thumb">
                      <a href="#"><img src="assets/img/blog/thumb1.jpg" alt=""/></a>
                    </div>
                    <div class="widget-content">
                      <a href="#">Eum Iriure Dolor Duis Autem</a>
                      <span><i class="icon-calendar"></i>June 21, 2018</span>
                    </div>
                    <div class="clearfix"></div>
                  </li>
                  <li>
                    <div class="widget-thumb">
                      <a href="#"><img src="assets/img/blog/thumb2.jpg" alt=""/></a>
                    </div>
                    <div class="widget-content">
                      <a href="#">Consectetuer Adipiscing Elit</a>
                      <span><i class="icon-calendar"></i>June 18, 2018</span>
                    </div>
                    <div class="clearfix"></div>
                  </li>
                  <li>
                    <div class="widget-thumb">
                      <a href="#"><img src="assets/img/blog/thumb3.jpg" alt=""/></a>
                    </div>
                    <div class="widget-content">
                      <a href="#">Et Leggings Fanny Pack</a>
                      <span><i class="icon-calendar"></i>June 17, 2018</span>
                    </div>
                    <div class="clearfix"></div>
                  </li>
                  <li>
                    <div class="widget-thumb">
                      <a href="#"><img src="assets/img/blog/thumb4.jpg" alt=""/></a>
                    </div>
                    <div class="widget-content">
                      <a href="#">Exercitation Photo Booth</a>
                      <span><i class="icon-calendar"></i>June 12, 2018</span>
                    </div>
                    <div class="clearfix"></div>
                  </li>
                  <li>
                    <div class="widget-thumb">
                      <a href="#"><img src="assets/img/blog/thumb5.jpg" alt=""/></a>
                    </div>
                    <div class="widget-content">
                      <a href="#">Eum Iriure Dolor Duis Autem</a>
                      <span><i class="icon-calendar"></i>June 9, 2018</span>
                    </div>
                    <div class="clearfix"></div>
                  </li>
                </ul>
              </div>
              <div class="widget">
                <h4 class="widget-title">Advertisement</h4>
                <div class="add-box">
                  <img src="assets/img/img1.jpg" alt=""/>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Singleblog