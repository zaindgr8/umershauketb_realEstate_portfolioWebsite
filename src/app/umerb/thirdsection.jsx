import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { TfiLinkedin } from "react-icons/tfi";


const Thirdsection = () => {
  return (
    <div className="hero-header hero-header__three align-items-center d-flex position-relative header-gradient">
      <div className="container position-relative">
        <div className="row justify-content-center justify-content-lg-between align-items-center">
          <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 pe-xxl-5">
            {/* Start Title */}
            <h1 className="hero-header_title display-2 fw-bold text-capitalize">
              Umer Shauket
            </h1>
            {/* /.End Title */}
            {/* Start Text */}
            <p className="fs-18 mb-3">
              He is a seasoned professional, serving as the CEO of Alif Group of
              Companies and Chairman of Cresco Real Estate. As an entrepreneur,
              sales coach, and success strategist, he brings a wealth of
              expertise to his roles. Umer's leadership as Founder/CEO and
              Managing Director reflects his commitment to excellence, driving
              both companies to new heights in their respective industries.
            </p>
            <span className="flex gap-x-4 text-gray-900">
              <Link href="">
                <BsInstagram />
              </Link>
              <Link href="">
                <FaFacebookF />
              </Link>
              <Link href="">
                <TfiLinkedin />
              </Link>
            </span>
            {/* /.End Text */}
            {/* Start Main Search Content */}
            {/* <DropdownTwo /> */}
            {/* /.End Main Search Content */}
          </div>
          <div className="col-lg-6 col-xl-6 col-xxl-6 ps-xl-5 d-none d-lg-block">
            <div className="row g-3 g-sm-5 align-items-center">
              <div className="col-6">
                <div className="position-relative">
                  <div className="line-shape-home" />
                  <div
                    className="position-relative image-bg-shape"
                    data-aos="zoom-in"
                  >
                    <div className="rounded-4 overflow-hidden position-relative">
                      <img
                        src="assets/img/about/ubc2.jpeg"
                        className="img-fluid position-relative image-parallax z-1"
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    src="assets/img/about/ubc5.jpg"
                    className="img-fluid rounded-4 mt-4 shadow card-asset-home z-1"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-easing="ease"
                    data-aos-delay={400}
                  />
                </div>
              </div>
              <div className="col-6 align-self-end">
                <div
                  className="overflow-hidden rounded-4"
                  data-aos="zoom-in"
                  data-aos-easing="ease"
                  data-aos-delay={200}
                >
                  <img
                    src="assets/img/about/ubc3.jpeg"
                    className="img-fluid rounded-4 image-parallax"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdsection