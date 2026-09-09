import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import WhatsAppButton from "../ui/WhatsAppButton";
import MobileConversionBar from "./MobileConversionBar";

export default function Layout({ children, solidNavbar = false }) {
  return (
    <div className="min-h-screen">
      <Navbar solid={solidNavbar} />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <MobileConversionBar />
    </div>
  );
}