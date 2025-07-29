import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
function MasterLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row  ">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <SideBar />
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MasterLayout;
