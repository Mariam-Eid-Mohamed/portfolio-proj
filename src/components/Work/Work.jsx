import styles from "./work.module.css";
import { NavLink } from "react-router-dom";
import WorkImg1 from "../../assets/img-1-C4nS0eD8.jpg";
import WorkImg2 from "../../assets/img-2-D-4H1m4L.jpg";
import WorkImg3 from "../../assets/img-3-pR2ZEVY9.jpg";
import WorkImg4 from "../../assets/img-4-tHccITd-.jpg";
import WorkImg5 from "../../assets/img-5-lAucr__a.jpg";
import WorkImg6 from "../../assets/img-6-DFW03AZ3.jpg";

let showMore = () => {};

function Work() {
  return (
    <>
      <div className="d-flex  flex-column align-items-center ">
        <div className=" w-75  mt-4  playfair-font">
          <p className="text-secondary mt-4 fs-6">MY WORK</p>
          <h5 className="fw-bold my-4 ">RECENT WORK</h5>
          <NavLink to="" className="text-decoration-none me-3">
            Graphic Design
          </NavLink>
          <NavLink to="" className="text-decoration-none  me-3">
            Apps
          </NavLink>
          <NavLink to="" className="text-decoration-none  me-3">
            Software
          </NavLink>

          <div className="row g-5 mt-1 ">
            <div className="col-lg-6 col-sm-12 ">
              <div className="work-img  ">
                <div className="img-layer "></div>
                <img src={WorkImg1} alt="" className={styles.workImg} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="work-img">
                <div className="img-layer"></div>
                <img src={WorkImg2} alt="" className={styles.workImg} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="work-img">
                <div className="img-layer"></div>
                <img src={WorkImg3} className={styles.workImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="work-img">
                <div className="img-layer"></div>
                <img src={WorkImg4} alt="" className={styles.workImg} />
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary text-white px-3 py02 my-5"
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
}

export default Work;
