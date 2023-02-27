import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/Header"
import ScrollTop from "../components/ScrollTop/ScrollTop"

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  )
}
export default Root
