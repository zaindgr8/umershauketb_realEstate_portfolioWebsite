"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



const Carousel = () => {
    const options = {
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    return (
      <OwlCarousel className="owl-theme blog-carousel" {...options}>
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/c3.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Continue Reading
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">
                  Real Estate Future
                </div>
                <span className="vr" />
                <div>jun 23, 2023</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  Navigating the Dubai Real Estate Boom: Trends and
                  Opportunities
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post">
          <div
            className="grid-post__thumb position-relative"
            data-aos="fade"
            data-aos-delay={400}
          >
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/c1.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Continue Reading
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">Luxury & Dubai</div>
                <span className="vr" />
                <div>jan 04, 2023</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  Luxury Living: Unveiling the Pinnacle of Dubai's Real Estate
                  Landscape
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={500}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="/"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/c4.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Continue Reading
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">Smart Investments</div>
                <span className="vr" />
                <div>feb 15, 2023</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  Smart Investments in Dubai: A Guide to Profitable Real Estate
                  Ventures
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={600}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <figure className="w-full h-[45vh] overflow-hidden">
                <img
                  src="assets/img/blog/c2.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </figure>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Continue Reading
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-gray-900 fw-medium">Developments</div>
                <span className="vr" />
                <div>mar 12, 2023</div>
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-17 mb-3">
                <Link href="#">
                  The Evolving Skyline: Dubai's Newest Real Estate Developments
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
      </OwlCarousel>
    );
};
export default Carousel;
