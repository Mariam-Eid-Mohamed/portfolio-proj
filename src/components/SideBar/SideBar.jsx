import profileImg from "../../assets/about-BgAkqdr2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import SideBarContent from "./SideBarContent/SideBarContent";

function SideBar() {
  return (
    <>
      {/* toggle button to be shown in mobile and small screens */}
      <button
        className="btn btn-dark d-lg-none m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {/* Sidebar for lg and xl screens */}
      <div className=" sidebar d-none d-lg-flex flex-column align-items-center p-3 playfair-font h-100">
        <SideBarContent profileImg={profileImg} />
      </div>
      {/* Offcanvas Sidebar for small and medium screens */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <SideBarContent profileImg={profileImg} />
        </div>
      </div>
    </>
  );
}

export default SideBar;
