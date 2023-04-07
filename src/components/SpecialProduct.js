import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct() {
  return (
    <div className="col-md-4 --home-wrapper-special-col">
      <div className="special-product-card align-items-center text-center">
        <div className="card-image">
          <img
            className="img-fluid"
            src="assets/images/churidar.jpeg"
            alt="watch"
          />
        </div>
        <div className="special-product-content">
          <h5 className="brand">Brand Name</h5>
          <h6 className="title">Title</h6>
          <ReactStars
            count={5}
            size={24}
            value={2}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">
            <span className="red-p">₹1999</span> &nbsp;
            <strike>₹2500</strike>
          </p>
          <div className="discount-till d-flex align-items-center text-center">
            <p className="mb-0 p-2">
              <b>5 </b> Days
            </p>
            <div className="d-flex align-items-center">
              <span className="badge rounded-circle p-3">1</span>:
              <span className="badge rounded-circle p-3">1</span>:
              <span className="badge rounded-circle p-3">1</span>
            </div>
          </div>
          <div className="prod-count my-3">
            <p>Products: 5</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar" style={{ width: "25%" }}></div>
            </div>
          </div>
          <Link className="button">Add to Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
