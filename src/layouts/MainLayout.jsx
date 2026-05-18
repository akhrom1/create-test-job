import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="mx-auto max-w-7xl px-4 py-10">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
