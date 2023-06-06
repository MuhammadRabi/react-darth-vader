import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import RestoreScroll from "../components/RestoreScroll";

const Root = () => {
  return (
    <>
      <RestoreScroll />
      <Navbar />
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  );
};
export default Root;
