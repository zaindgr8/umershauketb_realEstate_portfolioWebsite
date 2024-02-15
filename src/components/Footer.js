import Link from "next/link";
import ScrollTop from "./scroll-top";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <>
      {/* Start Footer */}
      <ScrollTop />
      <footer
        className=" bg-gray-900"
        data-image-src="assets/img/wall-sketch.png"
      >
        <div className="container pt-4">
          {/* Start Card Contact */}
          <div
            className="card-contact bg-white text-gray-900 mb-4 mt-5 py-5 px-4 px-md-5 position-relative overflow-hidden rounded-3 shadow-lg"
            data-aos="fade-down"
          >
            <div className="row align-items-center position-relative z-1">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <h2 className="display-6 fw-bold text-capitalize ">
                  Excited about advancing your real estate skills? Reach out to
                  kickstart your coaching
                </h2>
                <div className="">
                  <div className="col-auto">
                    <div
                    
                      className=" btn-outline-default border-0"
                    >
                      <i className="fas  mr-2 fa-mobile"></i>
                      <span className="">+971 58 514 5 243</span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div  className="fs-17 l-spacing-1 ">
                      <i className="fas fa-envelope fs-15 mr-2"></i>
                      <span>umer@crescorealestate.ae</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Card Background Image */}
            <div className="card-sketch w-full mb-[8vh]">
              <img
                src="assets/img/ub1.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* /.End Card Background Image */}
          </div>
          {/* .End Card Contact  */}
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 py-3 py-md-5 pe-xl-5 text-center">
              <div className="footer-about">
                <h3 className="fs-20 text-white fw-semibold link-title mb-3 position-relative">
                  Umer Shauket
                </h3>
                <div className=" mb-3 d-inline-block">
                  {/* Start Qr Code Image */}
                  <img
                    src="assets/img/ub3.jpeg"
                    className="mb-0 object-cover h-[20vh] rounded-lg"
                    height="146"
                    width="146"
                    alt="..."
                  />
                  {/* /End Qr Code Image */}
                </div>
                <p className="text-white">
                  Get in touch with me to discover more.
                </p>
                <div className="email-link d-block fw-medium mb-1">
                  <i className="text-white fa-solid fa-phone me-2"></i>
                  <span className="text-white">(+971) 58 514 5243</span>
                </div>
                <div
                  className="text-white email-link d-block fw-medium"
                >
                  <i className="fa-solid fa-envelope me-2"></i>
                  <span className="text-white">umer@crescorealestate.ae</span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-auto col-xl-2 py-3 py-md-5">
              <h3 className="fs-20 text-white fw-semibold link-title mb-3 position-relative">
                Connect with us
              </h3>
              {/* /Start Footer Link  */}
              <ul className="list-unstyled social-icon">
                <li>
                  <Link
                    href="https://www.instagram.com/umershauket_786/"
                    target="_blank"
                    className="align-items-center d-flex text-white flex gap-x-3"
                  >
                    <FaInstagram className="text-white text-2xl" />
                    Instagram
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/umer-shauket-918a1a56/"
                    className="align-items-center text-white d-flex flex gap-x-3"
                  >
                    <FaLinkedin className="text-white text-2xl" />
                    Linked In
                  </Link>
                </li>
                <li>
                  <Link
                    href={`https://wa.me/${+971585145243}`}
                    target="_blank"
                    className="align-items-center text-white d-flex gap-x-3"
                  >
                    <SiWhatsapp className="text-white text-2xl" />
                    WhatsApp
                  </Link>
                </li>
              </ul>
              {/* /.End Footer Link  */}
            </div>

            <div className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 py-3 py-md-5 d-lg-none d-xl-block">
              <h3 className="fs-20 text-white fw-semibold link-title mb-3 position-relative">
                Office Location
              </h3>
              {/* /Start Footer Link  */}

              <ul className="list-unstyled menu mb-0">
                <li className="mb-2">
                  <div className="link text-white d-block">
                    <p>Office 1005, 10th Floor, Sobha Ivory 2, Business Bay, Dubai</p>
                  </div>
                </li>
              </ul>
              {/* /.End Footer Link */}
            </div>
            <div className="col-6 col-sm-4 col-md-4 col-lg col-xl-2 py-3 py-md-5">
              {/* /Start Social Icon */}

              {/* /.End Social Icon */}
            </div>
          </div>
          <hr className="mb-0 mt-4" />
          <div className="py-4">
            <div className="align-items-center row mb-2">
              {/* Start Copy Rights Text */}
              <div className="col-sm-auto copy text-sm text-white">
                © 2024 UMER SHAUKET - ALL RIGHTS RESERVED
              </div>
              {/* /.End Copy Rights Text */}
            </div>
          </div>
        </div>
      </footer>
      {/* /.End Footer */}
    </>
  );
}
