import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AboutusOne = React.lazy(() => import("./pages/AboutusOne/index"));
const Homepage = React.lazy(() => import("./pages/Homepage/index"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Contactform = React.lazy(() => import("pages/Contactform"));
const Services = React.lazy(() => import("./pages/Services/Services"));
const Training = React.lazy(() => import("./pages/Training/index"));
const Guards = React.lazy(() => import("./pages/Guards/index"));
const Infra = React.lazy(() => import("./pages/Infra/index"));
const Audits = React.lazy(() => import("./pages/Audits/index"));
const ServicesOne = React.lazy(() => import("pages/ServicesOne"));
const Aboutus = React.lazy(() => import("./pages/Aboutus/index"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/servicesone" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/guards" element={<Guards />} />
          <Route path="/security-audits" element={<Audits />} />
          <Route path="/infrastructure" element={<Infra />} />
          <Route path="/services" element={<ServicesOne />} />
          <Route path="/contactform" element={<Contactform />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutusone" element={<AboutusOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
