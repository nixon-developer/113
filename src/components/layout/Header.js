import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsCart4, BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { SlUser } from "react-icons/sl";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Header() {
  return (
    <>
      <header className="--header-one py-2">
        <div className="container-fluid">
          <div className="row --header-one-row">
            <div className="col-md-12 --header-one-col">
              <p>
                Hotline:
                <a href="tel:+91 7559962660">+91 7559962660</a>
                <a className="ms-4" href="tel:+91 7559962660">
                  +91 7559962660
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="--header-two py-2">
        <div className="container-fluid">
          <div className="row --header-two-row">
            <div className="col-md-4 --header-two-col-left">
              <img
                className="--logo img-fluid"
                src="assets/images/logo.png"
                alt="logo"
              />
            </div>
            <div className="col-md-8 --header-two-col-right">
              <div className="--links">
                <div className="--header-two-col-right-buttons">
                  <Link>
                    <IoIosGitCompare className="--icons" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="--header-two-col-right-buttons">
                  <Link>
                    <MdOutlineFavoriteBorder className="--icons" />
                    <p>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="--header-two-col-right-buttons">
                  <Link>
                    <SlUser className="--icons" />
                    <p>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div className="--header-two-col-right-buttons">
                  <Link>
                    <BsCart4 className="--icons" />
                    <div className="d-flex flex-column">
                      <span className="badge">0</span>
                      <p>₹ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="--header-three py-3">
        <div className="container-fluid">
          <div className="row --header-three-row">
            <div className="col-md-5 --header-three-col-left">
              <div className="--links">
                <div className="--header-three-col-left-buttons">
                  <NavLink className=" " to="/">
                    Home
                  </NavLink>
                  <NavLink className=" " to="/">
                    Our Store
                  </NavLink>
                  <NavLink className=" " to="/">
                    Blogs
                  </NavLink>
                  <NavLink className=" " to="/">
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="col-md-3 --header-three-col-middle">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2 ">
                  <BsSearch className="--icons" />
                </span>
              </div>
            </div>

            <div className="col-md-4 --header-three-col-right">
              <div className="d-flex justify-content-end">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiCategory className="--icons" />
                      <span className="me-4 d-inline-block">
                        Shop Categories
                      </span>
                    </button>

                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Mobiles
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Fashion
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Electronics
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Appliances
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Beauty, Toys and More
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
