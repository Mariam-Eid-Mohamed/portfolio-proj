function About() {
  return (
    <>
      <div className="  d-flex flex-column  playfair-font mt-5  align-items-center   ">
        <div className="w-75 p-3 ">
          <p className="text-secondary">ABOUT US</p>
          <h3 className="text-dark my-4 fs-5">WHO AM I?</h3>
          <p className="text-secondary">
            <span className="fw-semibold text-dark">Hi Im Jackson Ford </span>On
            her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word (and) and
            the Little Blind Text should turn around and return to its own, safe
            country.
          </p>
          <p className="text-secondary">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
        </div>
        <div className=" mt-5 container w-75">
          <div className="row ">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="shadow  border-bottom border-primary p-4">
                <i className="fa-regular fa-lightbulb fa-2x text-primary mb-3"></i>
                <h5>Graphic Design</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="shadow p-4 border-bottom border-danger">
                <i class="fa-solid fa-globe text-danger fa-2x mb-3"></i>
                <h5 className="fw-semibold">Web Design</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="shadow p-4 border-bottom border-warning">
                <i className="fa-solid fa-database fa-2x text-warning mb-3"></i>
                <h5 className="fw-semibold">Software</h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="shadow p-4 border-bottom border-success">
                <i className="fa-solid fa-mobile-screen fa-2x text-success mb-3"></i>
                <h5 className="fw-semibold">Application</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
