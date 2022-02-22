import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/footer"
import ScrollTop from "./components/ScrollTop/ScrollTop"
import Homepage from "./Pages/Homepage"
import SecondPage from "./Pages/SecondPage"
import ThirdPage from "./Pages/ThirdPage"
import FourthPage from "./Pages/FourthPage"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="secondpage" element={<SecondPage />} />
        <Route path="thirdpage" element={<ThirdPage />} />
        <Route path="fourthpage" element={<FourthPage />} />
        {/*         <Route path="*" element={<NoMatch />} />
         */}
      </Routes>
      <ScrollTop />
      <Footer />
    </>
  )
}

export default App
