import profileImg from "../../assets/about-BgAkqdr2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <>
      {/* toggle button to be shown in mobile and small screens */}
      <button
        className="btn btn-dark d-md-none m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <div className="  sidebar vh-100 d-md-flex flex-column align-items-center p-3 playfair-font w-100">
        <div className="img-div ">
          <img
            src={profileImg}
            alt="profile image"
            className="img-fluid rounded-circle border   mt-3  custom-img"
          />
        </div>

        <NavLink
          to="home"
          className="fw-bold fs-4 text-decoration-none text-dark mt-3"
        >
          Jackson Foard
        </NavLink>
        <p className="mt-2 ">
          <NavLink
            className=" text-decoration-none job-desc active-link"
            to="#"
          >
            Ui/UX/DESIGNER
          </NavLink>
          <span className="small-text "> in Philippines</span>
        </p>
        <ul className="list-unstyled d-flex flex-column gap-2 ">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                `text-decoration-none text-dark small-text nav-link-underline ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `text-decoration-none text-dark small-text  nav-link-underline ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              className={({ isActive }) =>
                `text-decoration-none text-dark small-text  nav-link-underline ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="experience"
              className={({ isActive }) =>
                `text-decoration-none text-dark small-text  nav-link-underline ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="work"
              className={({ isActive }) =>
                `text-decoration-none text-dark small-text  nav-link-underline ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              Work
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
