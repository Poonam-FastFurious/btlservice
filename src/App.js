import "./App.css";
import "../src/assets/css/bootstrap-lib/bootstrap.min.css";
import "../src/assets/font-awesome-lib/icon/font-awesome.min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/slick.min.css";
import "../src/assets/css/aos.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import Liftbrand from "./Components/Liftbrand/Liftbrand";
import Aboutuspages from "./Components/Aboutus/Aboutuspages";
import Contact from "./Components/Contact/Contact";
import Erorrpage from "./Components/Erorrpage";

import Roadbranding from "./Components/RoadBranding/Roadbranding";

function App() {
  return (
    <>
      <div className="site-wrapper">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutuspages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/Liftbranding" element={<Liftbrand />} />
            <Route path="/Society" element={<Liftbrand />} />
            <Route path="/demo" element={<Liftbrand />} />
            <Route path="/services/roadbranding" element={<Roadbranding />} />
            <Route path="*" element={<Erorrpage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
