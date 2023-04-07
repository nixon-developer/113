import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="col-md-2 --home-wrapper-four-col">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="assets/images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            className="img-fluid"
            src="assets/images/tab1.jpg"
            alt="productImage"
          />
          <img
            className="img-fluid"
            src="assets/images/tab.jpg"
            alt="productImage"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Brand Name</h6>
          <h5 className="product-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit...
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">₹1999.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="assets/images/prodcompare.svg" alt="prodcompare" />
            </Link>
            <Link>
              <img src="assets/images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="assets/images/add-cart.svg" alt="addCart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
