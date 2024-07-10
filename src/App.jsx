import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Collection from "./components/Collections/Collections";
import Signature from "./components/Signature/Signature";
import EliteStory from "./components/Elite Story/EliteStory";
import Vision from "./components/Vision/Vision";
import Shimmer from "./components/Shimmer/Shimmer";
import Products from "./components/Products/Products";
import FridaySale from "./components/FridaySale/FridaySale";
import Footer from "./components/Footer/Footer";
import ScrollingBanner from "./components/ScrollingBanner/ScrollingBanner";
import Magazine from "./components/Magazine/Magazine";
import ProductSection from "./components/Product section/Productsection";
import BlackFridaySale from "./components/BlackFriday/BlackFridaySale";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Collection />
      <BlackFridaySale />
      <Signature />
      <EliteStory />
      <Vision />
      <Shimmer />
      <Products />
      <FridaySale />
      <ScrollingBanner />
      <ProductSection />
      <Magazine />
      <Footer />
    </React.Fragment>
  );
}

export default App;
