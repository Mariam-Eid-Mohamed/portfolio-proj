import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
function MasterLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-0  ">
          <div className="col-lg-3 p-0 position-fixed vh-100 overflow-auto z-3 ">
            <SideBar />
          </div>
          <div className="col-lg-9 offset-lg-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterLayout;
