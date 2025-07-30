function Skills() {
  return (
    <>
      <div className=" container skills-content  d-flex flex-column align-items-center flex-grow-1">
        <div className="content w-75 mt-5 ">
          <span className="text-secondary mb-3">MY SPECIALTY</span>
          <h3 className="semi-bold my-lg-3">MY SKILLS</h3>
          <p className="text-secondary ">
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="mt-4">
                <p className="fs-6">Photoshop</p>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar " style={{ width: "75%" }}>
                    75%
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="fs-6">HTML5</p>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar  bg-warning "
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="fs-6">WordPress</p>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="mt-4">
                <p className="fs-6">jQuery</p>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "60%" }}
                  >
                    25%
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="fs-6">CSS3</p>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "90%" }}
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="fs-6">SEO</p>
                <div
                  className="progress "
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar  bg-dark "
                    style={{ width: "25%" }}
                  >
                    25%
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

export default Skills;
