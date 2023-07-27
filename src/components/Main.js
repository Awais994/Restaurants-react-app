import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import SectionOne from "./sectionOne/SectionOne";
import StoreInfo from "./storeInfo/StoreInfo";
import OurSpecial from "./ourSpecial/OurSpecial";
import TopDishes from "./topDishes/TopDishes";
import DemoDish from "./demoDish/DemoDish";
import ImgContainer from "./imgContainer/ImgContainer";
import EventBooking from "./eventsBooking/EventBooking";
import OurFood from "./ourFood/OurFood";
import CostmSay from "./costmSay/CostmSay";
import NewsLetter from "./newsLetr/NewsLetter";
import Footer from "./footer/Footer";
import About from "./about/About";
import Menu from "./menu/Menu";
import ContactForm from "./contact/ContactForm";
import BookingForm from "./booking/BookingForm";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionOne />
                <StoreInfo />
                <OurSpecial />
                <TopDishes />
                <DemoDish />
                <ImgContainer />
                <EventBooking />
                <OurFood />
                <CostmSay />
                <NewsLetter />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Menu />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <StoreInfo />
                <ContactForm />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <BookingForm />
              </>
            }
          />
          <Route
            path="/privacypolicy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          />
        </Routes>

        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default Main;
