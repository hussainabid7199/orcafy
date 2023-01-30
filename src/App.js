// import logo from './logo.svg';
// import Bootstrap from "bootstrap"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Header from './Components/Subcomponent/Partials/Header';
import Index from "../src/Components/Client/Home/Index";
import Footer from "./Components/Subcomponent/Partials/Footer";
import Service from "../src/Components/Client/Service/Service";
import Contactus from "./Components/Client/Contactus/Contactus";
import Aboutus from "./Components/Client/Aboutus/Aboutus";
import Casestudy from "./Components/Client/Casestudy/Casestudy";
import Underdevelopment from "./Components/Subcomponent/Partials/Underdevelopment";
import Getaproposal from "./Components/Subcomponent/Partials/Getproposal";
// import E404 from "./Components/Subcomponent/Partials/E404";
// import Content from "./Components/Subcomponent/Content/Content";
import Emailmarketing from "./Components/Subcomponent/Content/Emailmarketing";
import Googleads from "./Components/Subcomponent/Content/Googleads";
import Sma from "./Components/Subcomponent/Content/Sma";
import Smam from "./Components/Subcomponent/Content/Smam";
import Googledisplay from "./Components/Subcomponent/Content/Googledispaly";
import Smm from "./Components/Subcomponent/Content/Smm";
import Mas from "./Components/Subcomponent/Content/Mas";
import Seo from "./Components/Subcomponent/Content/Seo";
import Wdc from "./Components/Subcomponent/Content/Wdc";

const patn = window.location.pathname;
console.log(patn);


function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/casestudy" element={<Casestudy />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/underdevelopment" element={<Underdevelopment />} />
          <Route exact path="/getaproposal" element={<Getaproposal />} />
          <Route exact path="/googleads" element={<Googleads/>} />
          <Route exact path="/sma" element={<Sma/>} />
          <Route exact path="/smam" element={<Smam/>} />
          <Route exact path="/gda" element={<Googledisplay/>} />
          <Route exact path="/socialmediaads" element={<Sma/>} />
          <Route exact path="/socialmediamanagement" element={<Smm/>} />
          <Route exact path="/mas" element={<Mas/>} />
          <Route exact path="/seo" element={<Seo/>} />
          <Route exact path="/websitedesign&creation" element={<Wdc/>} />
          <Route exact path="/emailmarketing" element={<Emailmarketing/>} />
        </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;
