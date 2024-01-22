import React from 'react'
import Carousel from "@/components/corousel";


const blogsection = () => {
  return (
    <div className="py-5 border-top">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {/* Start Section Header Title */}
            <div
              className="section-header text-center mb-5"
              data-aos="fade-down"
            >
              {/* Start Subtitle */}
              <div className="bg-gray-900 text-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                Umer Shauket's Insights
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                Navigate Through <br />
                <span className="text-gray-500"> Mr. Shauket's </span>Articles
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                Meet Mr. Umer Shauket, a leading real estate tycoon in Dubai and
                a seasoned sales & consultancy coach <br/> with over 10+ years of
                experience. Gain valuable insights from his expertise <br/> to
                maximize benefits in the dynamic world of real estate.
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default blogsection