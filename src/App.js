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
import E404 from "./Components/Subcomponent/Partials/E404";

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
          <Route exact path="/service/googleads" element={<E404 ContentTitle={"Google Ads Content"}/>} />
          <Route exact path="/service/sma" element={<E404 ContentTitle={"Social Media Advertising Content"}/>} />
          <Route exact path="/service/smam" element={<E404 ContentTitle={"Social Media Account Management Content"}/>} />
          <Route exact path="/service/gda" element={<E404 ContentTitle={"Google Display Advertising Content"}/>} />
          <Route exact path="/service/socialmediaads" element={<E404 ContentTitle={"Social Media Ads Content"}/>} />
          <Route exact path="/service/socialmediamanagement" element={<E404 ContentTitle={"Social Media Management Content"}/>} />
          <Route exact path="/service/mas" element={<E404 ContentTitle={"Marketing Automation Service Content"}/>} />
          <Route exact path="/service/seo" element={<E404 ContentTitle={"Search Engine Optimization Content"}/>} />
          <Route exact path="/service/websitedesign&creation" element={<E404 ContentTitle={"Website Design & Creation Content"}/>} />
          <Route exact path="/service/emailmarketing" element={<E404 ContentTitle={"Email Marketing Content"}/>} />
        </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;
