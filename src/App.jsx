import Navbar from "./Navbar"
import Explor from "./pages/Explor"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import AboutUs from "./pages/AboutUs"
import Login from "./pages/Login"
import Regsiter from "./pages/Regsiter"

import { Route, Routes } from "react-router-dom"
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Explor" element={<Explor />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Regsiter" element={<Regsiter />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <div>
<Footer/>
</div>
    </>
  )
}

export default App