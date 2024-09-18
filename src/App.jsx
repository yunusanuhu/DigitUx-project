import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import OurServices from "./pages/OurServices";
import OurProjects from "./pages/OurProjects";
import ContactUs from "./pages/ContactUs";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/ourprojects" element={<OurProjects />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}
