import React from 'react'
import Link from "next/link";

const Team = () => {
  return (
    <div className="team-content">
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
      </div>
    </div>
  );
}

export default Team