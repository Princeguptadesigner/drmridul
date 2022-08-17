import React from "react";
import BlogImg from "./images/6.jpg";

const Blog = () => {
  return (
    <>
      <div className="page-title-area page-title-four">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="page-title-item">
                    <h2>Our Latest Blogs</h2>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <i className="icofont-simple-right"></i>
                        </li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <section className="blog-area-two pt-100">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 wow fadeInUp animated" data-wow-delay=".3s">
                    <div className="blog-item">
                        <div className="blog-top">
                            <a href="blog-details.html">
                              <img src={BlogImg} alt="Blog" />
                            </a>
                        </div>
                        <div className="blog-bottom">
                            <h3>
                                <a href="blog-details.html">In this hospital there are special surgeon.</a>
                            </h3>
                            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                            <ul>
                                <li>
                                    <a href="blog-details.html">
                                        Read More
                                        <i className="icofont-long-arrow-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <i className="icofont-calendar"></i>
                                    Jan 03, 2020
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 wow fadeInUp animated" data-wow-delay=".5s">
                    <div className="blog-item">
                        <div className="blog-top">
                            <a href="blog-details.html">
                                <img src={BlogImg} alt="Blog" />
                            </a>
                        </div>
                        <div className="blog-bottom">
                            <h3>
                                <a href="blog-details.html">World AIDS Day, designated on 1 December.</a>
                            </h3>
                            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                            <ul>
                                <li>
                                    <a href="blog-details.html">
                                        Read More
                                        <i className="icofont-long-arrow-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <i className="icofont-calendar"></i>
                                    Jan 03, 2020
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4 wow fadeInUp animated" data-wow-delay=".7s">
                    <div className="blog-item">
                        <div className="blog-top">
                            <a href="blog-details.html">
                                <img src={BlogImg} alt="Blog" />
                            </a>
                        </div>
                        <div className="blog-bottom">
                            <h3>
                                <a href="blog-details.html">More than 80 clinical trials launch to test coronavirus.</a>
                            </h3>
                            <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                            <ul>
                                <li>
                                    <a href="blog-details.html">
                                        Read More
                                        <i className="icofont-long-arrow-right"></i>
                                    </a>
                                </li>
                                <li>
                                    <i className="icofont-calendar"></i>
                                    Jan 03, 2020
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Blog;