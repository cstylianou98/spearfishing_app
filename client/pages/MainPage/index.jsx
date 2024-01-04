import React, { useEffect } from "react";
import NavBarFunction from "../../components/NavBar/NavBar";
import BackgroundImageOverlay from "../../components/BackgroundImageOverlay/BackgroundImageOverlay";
import image from "../../assets/img/bluefin_tuna_img.webp";
import CardsComponent from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

function index() {
  return (
    <>
      <NavBarFunction />
      <BackgroundImageOverlay imageUrl={`${image}`}>
          <h2 className="main-page-title text-center mb-5">Cyprus Spearfishing Website</h2>
        <CardsComponent />
      </BackgroundImageOverlay>
      <Footer/>
    </>
  );
}
export default index;
