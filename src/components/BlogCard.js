import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-md-3 --home-wrapper-six-col">
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid" src="assets/images/blog.jpg" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">06, April 2023</p>
          <h5 className="title">Title</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            blanditiis nobis minus...
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
