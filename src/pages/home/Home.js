import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogCard";
import ProductCard from "../../components/ProductCard";
import "./home.css";
import SpecialProduct from "../../components/SpecialProduct";

function Home() {
  return (
    <>
      <section className="--home-wrapper-one py-3">
        <div className="container-fluid">
          <div className="row --home-wrapper-one-row">
            <div className="col-md-6 --home-wrapper-one-col-left">
              <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="2000">
                    <div className="--main-banner position-relative">
                      <img
                        className="img-fluid rounded-3"
                        src="assets/images/main-banner-3.jpg"
                        alt="main banner"
                      />
                      <div className="--main-banner-content position-absolute">
                        <h4>Sub Title</h4>
                        <h5>Main Title</h5>
                        <p>Price Range</p>
                        <Link className="mt-3 button">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="--main-banner position-relative">
                      <img
                        className="img-fluid rounded-3"
                        src="assets/images/main-banner-3.jpg"
                        alt="main banner"
                      />
                      <div className="--main-banner-content position-absolute">
                        <h4>Sub Title</h4>
                        <h5>Main Title</h5>
                        <p>Price Range</p>
                        <Link className="mt-3 button">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="--main-banner position-relative">
                      <img
                        className="img-fluid rounded-3"
                        src="assets/images/main-banner-3.jpg"
                        alt="main banner"
                      />
                      <div className="--main-banner-content position-absolute">
                        <h4>Sub Title</h4>
                        <h5>Main Title</h5>
                        <p>Price Range</p>
                        <Link className="mt-3 button">Buy Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 --home-wrapper-one-col-right">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="--small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="assets/images/catbanner-01.jpg"
                    alt="main banner"
                  />
                  <div className="--small-banner-content position-absolute">
                    <h4>Sub Title</h4>
                    <h5>Main Title</h5>
                    <p>Price Range</p>
                  </div>
                </div>

                <div className="--small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="assets/images/catbanner-02.jpg"
                    alt="main banner"
                  />
                  <div className="--small-banner-content position-absolute">
                    <h4>Sub Title</h4>
                    <h5>Main Title</h5>
                    <p>Price Range</p>
                  </div>
                </div>

                <div className="--small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="assets/images/catbanner-03.jpg"
                    alt="main banner"
                  />
                  <div className="--small-banner-content position-absolute">
                    <h4>Sub Title</h4>
                    <h5>Main Title</h5>
                    <p>Price Range</p>
                  </div>
                </div>

                <div className="--small-banner position-relative p-1">
                  <img
                    className="img-fluid rounded-3"
                    src="assets/images/catbanner-04.jpg"
                    alt="main banner"
                  />
                  <div className="--small-banner-content position-absolute">
                    <h4>Sub Title</h4>
                    <h5>Main Title</h5>
                    <p>Price Range</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="--home-wrapper-two py-3">
        <div className="container-fluid">
          <div className="row --home-wrapper-two-row">
            <div className="col-md-3 --home-wrapper-two-col">
              <div className="--services">
                <img
                  className="img-fluid"
                  src="assets/images/service-02.png"
                  alt="services"
                />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save upto 25% off</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 --home-wrapper-two-col">
              <div className="--services">
                <img
                  className="img-fluid"
                  src="assets/images/service-03.png"
                  alt="services"
                />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an expert</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-two-col">
              <div className="--services">
                <img
                  className="img-fluid"
                  src="assets/images/service-04.png"
                  alt="services"
                />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Price</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-two-col">
              <div className="--services">
                <img
                  className="img-fluid"
                  src="assets/images/service-05.png"
                  alt="services"
                />
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="--home-wrapper-three py-5">
        <div className="container-fluid">
          <div className="row --home-wrapper-three-row">
            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/camera.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Music & gaming</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/acc.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/tv.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/headphone.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/camera.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Music & gaming</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/acc.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/tv.jpg"
                  alt="camera"
                />
              </div>
            </div>

            <div className="col-md-3 --home-wrapper-three-col p-0">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>Content</p>
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/headphone.jpg"
                  alt="camera"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="--home-wrapper-four py-5">
        <div className="container-fluid">
          <div className="row --home-wrapper-four-row">
            <h3 className="section-heading">New Collection</h3>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="--special-wrapper py-5 --home-wrapper-2">
        <div className="container-fluid">
          <div className="row">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row --home-wrapper-special-row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="marquee-wrapper --home-wrapper-five py-5">
        <div className="container-fluid">
          <div className="row --home-wrapper-five-row">
            <div className="col-md-12 --home-wrapper-five-col">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-01.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-02.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-03.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-04.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-05.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-06.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-07.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4">
                    <img
                      className="w-50"
                      src="assets/images/brand-08.png"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="--home-wrapper-six py-5">
        <div className="container-fluid">
          <div className="row --home-wrapper-six-row">
            <h3 className="section-heading">Our Latest Blogs</h3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
