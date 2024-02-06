"use client"
import React, { useEffect } from 'react';
import 'magnific-popup/dist/magnific-popup.css';
import $ from 'jquery'; // Ensure jQuery is imported
const PopUpImageGallery = () => {
  useEffect(() => {
    // Initialize Magnific Popup on your gallery
    $('.grid-images-item-wrap').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
    });
    $('#browse-gallery-link').on('click', function () {
      $('.grid-images-item-wrap').magnificPopup('open');
    });

  }, []);

  return (
    <div className="position-relative mb-5">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-5">
            {/* Start Section Header title */}
            <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
              Occasions & Personal Affairs
            </h2>
            {/* /.End Section Header Title */}
            {/* Start Section Header Sub Title */}
            <div className="sub-title fs-16">
              Mr. Umer Shaukat, a dynamic entrepreneur and influential
              coach,
              <br className="d-none d-lg-block" /> actively connects with
              individuals in the market. His clientele spans the globe.
              <br className="d-none d-lg-block" /> Delve deeper into his life
              and experiences below.
            </div>
            {/* /.End Section Header Sub Title */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>
      {/* Start Header Masonry */}
      <div className="header-masonry position-relative">
        <div id="gallery-1" className="header-masonry-grid zoom-gallery">
          <div className="column-start">
            <a
              href="assets/img/property-details/cvr1.jpg"
              className="grid-images-item-wrap overflow-hidden position-relative rounded-4 h-100 w-100 d-block"
            >
              {/* Masonry Image */}
              <img
                src="assets/img/property-details/cvr4.jpg"
                alt=""
                className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
              />
            </a>
          </div>
          <div className="column-start-end">
            <a
              href="assets/img/property-details/cvr3.jpg"
              className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
            >
              {/* Masonry Image */}
              <img
                src="assets/img/property-details/cvr6.jpg"
                alt=""
                className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
              />
            </a>
            <a
              href="assets/img/property-details/cvr2.jpg"
              className="grid-images-item-wrap overflow-hidden position-relative rounded-4 w-100 box-ratio-2-3 d-block"
            >
              {/* Masonry Image */}
              <img
                src="assets/img/property-details/cvr5.jpg"
                alt=""
                className="bottom-0 h-100 object-fit-cover position-absolute start-0 top-0 w-100"
              />
            </a>
          </div>
        </div>
      </div>
      {/* /. End Header Masonry */}
      <div className="header-share align-items-center bg-gray-900 d-flex gap-2 flex-wrap g-3 header-btn-group p-3 p-lg-4 mt-3 mt-md-0">
        <a
          href="#"
          id="browse-gallery-link"
          className="btn btn-sm bg-white text-gray-900 btn-gallery"
        >
          <i className="fa-solid fa-image me-2" />
          Browse Gallery
        </a>
        {/* End Product Images Slider */}
        <div className="product-video-btn">
          <a
            className="popup-youtube d-flex align-items-center justify-content-center "
            href="https://www.youtube.com/watch?v=UtiSe1OvL0w"
          >
            <div className="btn-video bg-white text-gray-900 d-flex align-items-center justify-content-center rounded-pill me-2">
              <i className="fa-solid fa-video" />
            </div>
            <span className="text-white fw-medium">Watch video</span>
          </a>
        </div>
        {/* /.End of product video button */}
      </div>
    </div>
  );
};

export default PopUpImageGallery;
