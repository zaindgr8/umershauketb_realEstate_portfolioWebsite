"use client";
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
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/1.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              <Link href="https://www.facebook.com/azim.awan16" target="_blank">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/azamcreates/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/muhammad-tariq-622211152/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Director
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">
            Muhammad Azam Tariq
          </h4>
          <div>
            Experienced real estate visionary leading with strategic insight.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/6.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100093387365067"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/douaa_hq/" target="_blank">
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/douaa%2Dharraq/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Off-Plan Consultant
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">Douaa Reina</h4>
          <div>
            Passionate real estate agent specializing in off-plan properties
            within Dubai's dynamic market.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/7.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              <Link
                href="https://www.facebook.com/gulraiz.naveed"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/therealtaholic/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/gulraiz-naveed-043655230/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Sales Executive
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">Osama Khalifa</h4>
          <div>
            Driving results through strategic leadership and a passion for
            exceeding.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
     
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/2.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100006375667786"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/pearllrealestate/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/margault-almeras-60785515a/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Off-Plan Consultant
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">Sabrine Touati</h4>
          <div>
            navigating clients through the exciting world of pre-construction
            real estate.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/5.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              <Link
                href="https://www.facebook.com/waleedkhanyousafzai"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/reltaholic/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/crescorealestatellc/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Sales Executive
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">
            Waleed Khan Yousafzai
          </h4>
          <div>
            dedicated to delivering exceptional client experiences and achieving
            sales success.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/8.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              {/* <Link
                href="https://www.facebook.com/waleedkhanyousafzai"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link> */}
            </li>
            <li>
              <Link
                href="https://www.instagram.com/vruti_cresco/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/vrutika-dhanak-69843a2b4/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Sales Executive
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">Shifa</h4>
          <div>
            From managing schedules to handling inquiries, she streamline
            administrative tasks.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/umer.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              {/* <Link
                href="https://www.facebook.com/waleedkhanyousafzai"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link> */}
            </li>
            <li>
              <Link
                href="https://www.instagram.com/omerakramrealtor/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              {/* <Link
                href="https://www.linkedin.com/in/vrutika-dhanak-69843a2b4/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link> */}
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Sales Manager
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">Omar Akram</h4>
          <div>
            Whether you're a seasoned investor or a first-time buyer, he'll
            guide you through every step with in-depth market knowledge.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/my.jpeg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            <li>
              <Link href="https://www.facebook.com/zaindgr8/" target="_blank">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/zainulabideen0007/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/zain-ul-abideen-baloch/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            IT Consultant
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">
            Zain Ul Abideen Baloch
          </h4>
          <div>
            Our skilled IT Consultant and Full Stack Web Developer is dedicated
            to delivering seamless company digitalization to fuel business
            growth.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
 
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/shmr1.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
            {/* <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100005960020710&sfnsn=wa"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </Link>
            </li> */}
            <li>
              <Link
                href="https://www.instagram.com/malikshahmir3/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Link>
            </li>
            {/* <li>
              <Link
                href="https://www.linkedin.com/in/omar-aladheem-5748b498?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </li> */}
          </ul>
          <div className="bg-dark bottom-1 end-1 position-absolute px-3 py-1 rounded-5 team-description-wrap text-white z-1">
            Sales Executive
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="member-info text-center mt-3">
          <h4 className="mb-2 member-name text-truncate">Malik Shahmeer</h4>
          <div>
            Our dynamic Sales Executive in Dubai Real Estate. With a keen eye
            for market trends and a passion for client satisfaction.
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
    </OwlCarousel>
  );
};
export default Carousel;
