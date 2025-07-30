import styles from "./work.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import WorkImg1 from "../../assets/img-1-C4nS0eD8.jpg";
import WorkImg2 from "../../assets/img-2-D-4H1m4L.jpg";
import WorkImg3 from "../../assets/img-3-pR2ZEVY9.jpg";
import WorkImg4 from "../../assets/img-4-tHccITd-.jpg";
import WorkImg5 from "../../assets/img-5-lAucr__a.jpg";
import WorkImg6 from "../../assets/img-6-DFW03AZ3.jpg";
import { useState } from "react";

function Work() {
  const [ShowExtraImages, setShowExtraImages] = useState(false);
  const showMore = () => {
    setShowExtraImages(true);
  };
  return (
    <>
      <div className="d-flex  justify-content-center align-items-center ">
        <div className=" w-75  my-4  playfair-font">
          <p className="text-secondary mt-4 fs-6">MY WORK</p>
          <h5 className="fw-bold my-4 ">RECENT WORK</h5>
          <NavLink to="#" className="text-decoration-none me-3">
            Graphic Design
          </NavLink>
          <NavLink to="#" className="text-decoration-none  me-3">
            Apps
          </NavLink>
          <NavLink to="#" className="text-decoration-none  me-3">
            Software
          </NavLink>

          <div className="row g-5 mt-1 ">
            <div className="col-lg-6 col-sm-12 ">
              <div className={`${styles.workImgWrapper}  `}>
                <div
                  className={`${styles.imgOverlay}   d-flex flex-column  justify-content-around `}
                >
                  <div className="d-flex flex-column  mx-3 ">
                    <Link to="#" className=" text-white fs-5 ">
                      WORK 02
                    </Link>
                    <span className=" text-white mt-3">Animation</span>
                  </div>
                  <div className="icons d-flex align-items-center gap-3 mx-3  ">
                    <Link className=" text-dark">
                      <span className={`${styles.iconBox}`}>
                        <i className="fa-solid fa-share-nodes  "></i>
                      </span>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} eyeicon d-flex  align-items-center`}
                      >
                        <i className="fa-solid fa-eye  me-1"></i>

                        <span className=" text-dark">100</span>
                      </div>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} d-flex  align-items-center`}
                      >
                        <i className="fa-regular fa-heart text-dark me-1"></i>

                        <span>49</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <img src={WorkImg1} alt="" className={styles.workImg} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <div className={`${styles.workImgWrapper}  `}>
                <div
                  className={`${styles.imgOverlay}   d-flex flex-column  justify-content-around `}
                >
                  <div className="d-flex flex-column  mx-3 ">
                    <Link to="#" className=" text-white fs-5 ">
                      WORK 02
                    </Link>
                    <span className=" text-white mt-3">Animation</span>
                  </div>
                  <div className="icons d-flex align-items-center gap-3 mx-3  ">
                    <Link className=" text-dark">
                      <span className={`${styles.iconBox}`}>
                        <i className="fa-solid fa-share-nodes  "></i>
                      </span>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} eyeicon d-flex  align-items-center`}
                      >
                        <i className="fa-solid fa-eye  me-1"></i>

                        <span className=" text-dark">100</span>
                      </div>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} d-flex  align-items-center`}
                      >
                        <i className="fa-regular fa-heart text-dark me-1"></i>

                        <span>49</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <img src={WorkImg2} alt="" className={styles.workImg} />
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 ">
              <div className={`${styles.workImgWrapper}  `}>
                <div
                  className={`${styles.imgOverlay}   d-flex flex-column  justify-content-around `}
                >
                  <div className="d-flex flex-column  mx-3 ">
                    <Link to="#" className=" text-white fs-5 ">
                      WORK 02
                    </Link>
                    <span className=" text-white mt-3">Animation</span>
                  </div>
                  <div className="icons d-flex align-items-center gap-3 mx-3  ">
                    <Link className=" text-dark">
                      <span className={`${styles.iconBox}`}>
                        <i className="fa-solid fa-share-nodes  "></i>
                      </span>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} eyeicon d-flex  align-items-center`}
                      >
                        <i className="fa-solid fa-eye  me-1"></i>

                        <span className=" text-dark">100</span>
                      </div>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} d-flex  align-items-center`}
                      >
                        <i className="fa-regular fa-heart text-dark me-1"></i>

                        <span>49</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <img src={WorkImg3} alt="" className={styles.workImg} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <div className={`${styles.workImgWrapper}  `}>
                <div
                  className={`${styles.imgOverlay}   d-flex flex-column  justify-content-around `}
                >
                  <div className="d-flex flex-column  mx-3 ">
                    <Link to="#" className=" text-white fs-5 ">
                      WORK 02
                    </Link>
                    <span className=" text-white mt-3">Animation</span>
                  </div>
                  <div className="icons d-flex align-items-center gap-3 mx-3  ">
                    <Link className=" text-dark">
                      <span className={`${styles.iconBox}`}>
                        <i className="fa-solid fa-share-nodes  "></i>
                      </span>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} eyeicon d-flex  align-items-center`}
                      >
                        <i className="fa-solid fa-eye  me-1"></i>

                        <span className=" text-dark">100</span>
                      </div>
                    </Link>
                    <Link className="text-dark text-decoration-none">
                      <div
                        className={`${styles.iconBox} d-flex  align-items-center`}
                      >
                        <i className="fa-regular fa-heart text-dark me-1"></i>

                        <span>49</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <img src={WorkImg4} alt="" className={styles.workImg} />
              </div>
            </div>
            {ShowExtraImages && (
              <>
                <div className="col-lg-6 col-sm-12 ">
                  <div className={`${styles.workImgWrapper}  `}>
                    <div
                      className={`${styles.imgOverlay}   d-flex flex-column  justify-content-around `}
                    >
                      <div className="d-flex flex-column  mx-3 ">
                        <Link to="#" className=" text-white fs-5 ">
                          WORK 02
                        </Link>
                        <span className=" text-white mt-3">Animation</span>
                      </div>
                      <div className="icons d-flex align-items-center gap-3 mx-3  ">
                        <Link className=" text-dark">
                          <span className={`${styles.iconBox}`}>
                            <i className="fa-solid fa-share-nodes  "></i>
                          </span>
                        </Link>
                        <Link className="text-dark text-decoration-none">
                          <div
                            className={`${styles.iconBox} eyeicon d-flex  align-items-center`}
                          >
                            <i className="fa-solid fa-eye  me-1"></i>

                            <span className=" text-dark">100</span>
                          </div>
                        </Link>
                        <Link className="text-dark text-decoration-none">
                          <div
                            className={`${styles.iconBox} d-flex  align-items-center`}
                          >
                            <i className="fa-regular fa-heart text-dark me-1"></i>

                            <span>49</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <img src={WorkImg5} alt="" className={styles.workImg} />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 ">
                  <div className={`${styles.workImgWrapper}  `}>
                    <div
                      className={`${styles.imgOverlay}   d-flex flex-column  justify-content-around `}
                    >
                      <div className="d-flex flex-column  mx-3 ">
                        <Link to="#" className=" text-white fs-5 ">
                          WORK 02
                        </Link>
                        <span className=" text-white mt-3">Animation</span>
                      </div>
                      <div className="icons d-flex align-items-center gap-3 mx-3  ">
                        <Link className=" text-dark">
                          <span className={`${styles.iconBox}`}>
                            <i className="fa-solid fa-share-nodes  "></i>
                          </span>
                        </Link>
                        <Link className="text-dark text-decoration-none">
                          <div
                            className={`${styles.iconBox} eyeicon d-flex  align-items-center`}
                          >
                            <i className="fa-solid fa-eye  me-1"></i>

                            <span className=" text-dark">100</span>
                          </div>
                        </Link>
                        <Link className="text-dark text-decoration-none">
                          <div
                            className={`${styles.iconBox} d-flex  align-items-center`}
                          >
                            <i className="fa-regular fa-heart text-dark me-1"></i>

                            <span>49</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <img src={WorkImg6} alt="" className={styles.workImg} />
                  </div>
                </div>
              </>
            )}
          </div>
          {!ShowExtraImages && (
            <button
              className="btn btn-primary text-white px-3 py02 my-5"
              onClick={showMore}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Work;
