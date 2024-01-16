import React from 'react';
import FeaturesPropertiesData from "../data/features-properties.json"
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";
import Link from "next/link"

export default async function FeaturesProperties() {
  return (
    <>
      {/* Start Featured Properties Section */}
      <div className="py-5">
        <div className="container py-4">
       
          {/* Start Card */}
          {
             FeaturesPropertiesData?.map((featuresProperty) => {
              return (
                <div
                  className="z-10 card mb-4 overflow-hidden border-0 shadow relative rounded-3"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  key=""
                >
                  <Link href="" className="#" />
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-5 col-md-6 col-xl-3 d-flex flex-column">
                        {/* Ensure consistent height for image and content */}
                        <div className="h-100">
                          <div className="card-image-hover overflow-hidden position-relative h-100">
                            <img
                              src="assets/img/ub3.jpeg"
                              alt=""
                              className="h-100 w-100 object-fit-cover"
                            />
                          </div>
                          {/* Add content below the image if needed */}
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                        <div className="d-flex flex-column h-100">
                          <div className="mb-4">
                            <h6 className="fs-23 mb-2">UMER SHAUKET</h6>
                            <div className="fs-16">
                              <span>CEO/ CHAIRMAN at CRESCO Real Estate</span>
                            </div>
                            <div className="mt-1">
                              {" "}
                              He is a dynamic entrepreneur known for fearlessly
                              exploring new opportunities. As the Founder and
                              CEO of diverse ventures, he brings innovation and
                              visionary leadership to the forefront.
                            </div>
                            <div className="flex items-center text-gray-900 gap-x-5 mt-2 ">
                              <span className="">
                                <Link href="">
                                  <FaFacebookF />
                                </Link>
                              </span>
                              <span>
                                <Link href="">
                                  <PiInstagramLogoBold />
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })

          }
          {/* /.End Card */}

        </div>
      </div>
      {/* /.End Featured Properties Section */}

    </>
  );
}
async function getFeaturesProperties() {
  const res = await fetch('https://findhusly.vercel.app/api/features-properties')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}