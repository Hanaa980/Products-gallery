import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
      <div className=" min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white m-0 p-0">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
  );
}
