import React from "react";
import "./styles.css";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Header from "../Components/Header/Header.jsx";
import Category from "../Components/Category/Category.jsx";
import ProductCard from "../Components/ProductCard/ProductCard.jsx";
import Background from "../Components/Background/Background.jsx";
import FeatureSection from "../Components/FeatureSection/FeatureSection.jsx";
import Gallery from "../Components/Gallery/Gallery.jsx";
import Reviews from "../Components/Reviews/Reviews.jsx";
import Private from "../Components/Private/Private.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import MainRouter from "../router/Router.jsx";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="padding">
        <Header></Header>
        <Category></Category>
        <ProductCard></ProductCard>
        <Background></Background>
        <FeatureSection></FeatureSection>
        <Gallery></Gallery>
        <FeatureSection></FeatureSection>
        <Reviews></Reviews>
        <Private></Private>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
