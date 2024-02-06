import React from 'react'
import Link from "next/link";

const Team = () => {
  return (
    <div className="py-5 team-content">
      <div className="container py-4">
        <div className="align-items-end row g-4 mb-5">
          <div className="col">
            {/* Start Section Header Title */}
            <div className="section-header text-center text-xl-start">
              {/* Start Subtitle */}
              <div className="bg-gray-900 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-white">
                My Team
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                Welcome to My Team Roster
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                Get to know the individuals who make up my collaborative force,
                <br />
                ensuring you receive top-notch service and unparalleled guidance
                <br />
                in every step of your property journey
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="row justify-content-center g-3 g-sm-4">
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="w-full h-[45vh] overflow-hidden">
                  <img
                    src="assets/img/avatar/azm.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <ul className="align-items-center d-flex flex-column fs-21 gap-2 justify-content-center list-unstyled mb-0 member-social position-absolute">
                  <li>
                    <Link
                      href="https://www.facebook.com/azim.awan16"
                      target="_blank"
                    >
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
                  Experienced real estate visionary leading with strategic
                  insight.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="w-full h-[45vh] overflow-hidden">
                  <img
                    src="assets/img/avatar/gulli.jpg"
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
                  Assistant Manager
                </div>
              </div>
              {/* Start Avatar Info */}
              <div className="member-info text-center mt-3">
                <h4 className="mb-2 member-name text-truncate">
                  Gulraiz Naveed
                </h4>
                <div>
                  Driving results through strategic leadership and a passion for
                  exceeding.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="w-full h-[45vh] overflow-hidden">
                  <img
                    src="assets/img/avatar/mrgo.png"
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
                <h4 className="mb-2 member-name text-truncate">Margo Pearl</h4>
                <div>
                  navigating clients through the exciting world of
                  pre-construction real estate.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            {/* Start Card */}
            <div className="team-member">
              <div className="member-header overflow-hidden position-relative rounded-4">
                <div className="w-full h-[45vh] overflow-hidden">
                  <img
                    src="assets/img/avatar/waled.jpeg"
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
                  dedicated to delivering exceptional client experiences and
                  achieving sales success.
                </div>
              </div>
              {/* /.End Avatar Info */}
            </div>
            {/* /.End Card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team