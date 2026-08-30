import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Seo from "./components/seo/Seo";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load route pages for optimal performance and chunking
const Home = lazy(() => import("./pages/Home"));
const Packages = lazy(() => import("./pages/Packages"));
const PackageDetails = lazy(() => import("./pages/PackageDetails"));
const Services = lazy(() => import("./pages/Services"));
const Transportation = lazy(() => import("./pages/Transportation"));
const Hotels = lazy(() => import("./pages/Hotels"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CustomizeTour = lazy(() => import("./pages/CustomizeTour"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5EE]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#123B2A] border-t-[#C5A35A] rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-widest text-[#123B2A] font-medium font-body">
          Royal Classic Tours
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Seo path={pathname} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:slug" element={<PackageDetails />} />

          <Route path="/services" element={<Services />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/hotels" element={<Hotels />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customize-tour" element={<CustomizeTour />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}