import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdLocalMall } from "react-icons/md";

function Footer() {
  return (
    <>
      <footer className="--footer-one py-4">
        <div className="container-fluid">
          <div className="row --footer-one-row">
            <div className="col-md-5 --footer-one-col-left">
              <div className="--footer-one-col-left-title">
                <MdLocalMall className="--icons" />
                <h4>Sign Up for Newsletter</h4>
              </div>
            </div>
            <div className="col-md-5 --footer-one-col-right">
              <div className="input-group input-group-sm">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="--footer-two py-4">
        <div className="container-fluid">
          <div className="row --footer-two-row">
            <div className="col-md-4 --footer-two-col-first">
              <h5 className="pb-2">Contact Us</h5>
              <div>
                <address>
                  No.000, MKM Building, <br />
                  Kunnamkulam, Thrissur <br />
                  Pincode: 680517
                </address>
                <a href="tel:+91 7559962660">+91 7559962660</a>
                <br />
                <a href="mailto:mkm.nixon@gmail.com">mkm.nixon@gmail.com</a>
                <div className="--social-icons">
                  <BsLinkedin className="--icons" />
                  <BsInstagram className="--icons" />
                  <BsGithub className="--icons" />
                  <BsYoutube className="--icons" />
                </div>
              </div>
            </div>
            <div className="col-md-3 --footer-two-col-second">
              <h5 className="pb-2">Information</h5>
              <div className="--links flex-column">
                <Link className="me-auto">Privacy Policy</Link>
                <Link className="me-auto">Refund Policy</Link>
                <Link className="me-auto">Shipping Policy</Link>
                <Link className="me-auto">Terms & Conditions</Link>
                <Link className="me-auto">Blogs</Link>
              </div>
            </div>
            <div className="col-md-3 --footer-two-col-third">
              <h5 className="pb-2">Account</h5>
              <div className="--links flex-column">
                <Link className="me-auto">About Us</Link>
                <Link className="me-auto">Faq</Link>
                <Link className="me-auto">Contact</Link>
              </div>
            </div>
            <div className="col-md-2 --footer-two-col-four">
              <h5 className="pb-2">Quick Links</h5>
              <div className="--links flex-column">
                <Link className="me-auto">Laptops</Link>
                <Link className="me-auto">Headphones</Link>
                <Link className="me-auto">Tablets</Link>
                <Link className="me-auto">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="--footer-three py-3">
        <div className="container-fluid">
          <div className="row --footer-three-row">
            <div className="col-md-12 --footer-three-col">
              <p>
                &copy; 2023-{new Date().getFullYear()}, Powered by Nixon
                Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
