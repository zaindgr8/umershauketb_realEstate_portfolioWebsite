import Dropdown from "@/components/form-control-two";
import FeaturesProperties from "@/components/feature-properties";


const Firstsection = () => {
  return (
    <>
      <div className="hero-header hero-header__one align-items-center background-image d-flex position-relative">
        <img
          src="assets/img/header/01.jpg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-absolute bottom-0">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8"></div>
          </div>
        </div>
      </div>
      {/* <FeaturesProperties /> */}
    </>
  );
}

export default Firstsection