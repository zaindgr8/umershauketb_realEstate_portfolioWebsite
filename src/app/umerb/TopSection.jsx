import ReusableCountUp from "@/components/counter";


const TopSection = () => {
  return (
    <>
      <div className="hero-header hero-header__one align-items-center background-image d-flex position-relative">
        <img
          src="assets/img/header/v1.gif"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-2">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {/* Start Main Search Content */}
              {/* <Dropdown /> */}
              {/* <JQueryComponent/> */}
              {/* /.End Main Search Content */}
            </div>
          </div>
        </div>
      </div>
      {/*Counter Part Start */}
      <div className="counter-content mt-n5 position-relative section">
        <div className="container-xl position-relative">
          <div className="row">
            <div className="col-12 col-lg-8 position-relative">
              <div className="bg-gray-900 expand-w-start h-100 position-absolute shadow-sm start-0 top-0 w-100" />
              <div className="position-relative py-5">
                <div className="row position-relative g-4">
                  <div className="col-6 col-sm-3 text-center text-lg-start">
                    <div className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                      <strong className="counter">
                        <ReusableCountUp
                          separator=""
                          decimals={""}
                          decimal=""
                          start={0}
                          end={10}
                        />
                      </strong>
                      <small> +</small>
                    </div>
                    <p className="fw-semibold mb-0 text-white text-center">
                      Years Of Experience
                    </p>
                  </div>
                  <div className="col-6 col-sm-3 text-center text-lg-start">
                    <p className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                      <strong className="counter">
                        {" "}
                        <ReusableCountUp
                          separator=""
                          decimals={""}
                          decimal=""
                          start={0}
                          end={2500}
                        />
                      </strong>
                      <small> +</small>
                    </p>
                    <p className="fw-semibold mb-0 text-white text-center">
                      Satisfied Clients
                    </p>
                  </div>
                  <div className="col-6 col-sm-3 text-center text-lg-start">
                    <p className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                      <strong className="d-flex">
                        AED{" "}
                        <span className="ml-1 mr-1 counter">
                          <ReusableCountUp
                            separator=""
                            decimals={1}
                            decimal="."
                            start={0.0}
                            end={6.8}
                          />
                        </span>
                        B
                      </strong>
                      <small> +</small>
                    </p>
                    <p className="fw-semibold mb-0 text-white text-center">
                      Investment Portfolio
                    </p>
                  </div>
                  <div className="col-6 col-sm-3 text-center text-lg-start">
                    <p className="d-flex fs-1 gap-1 justify-content-center mb-0 text-white">
                      <strong className="counter">
                        <ReusableCountUp
                          separator=""
                          decimals={""}
                          decimal=""
                          start={0}
                          end={30}
                        />
                      </strong>
                      <small> +</small>
                    </p>
                    <p className="fw-semibold mb-0 text-white text-center">
                      Total Agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSection;