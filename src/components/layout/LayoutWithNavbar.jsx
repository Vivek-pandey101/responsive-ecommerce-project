import { Outlet } from "react-router-dom";
import Navbar from "../Navbar"

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default LayoutWithNavbar;
