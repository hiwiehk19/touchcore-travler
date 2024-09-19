import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FastestWay from "./components/FastestWay";
 import EverythingYouNeed from "./components/EverythingYouNeed";
import PaymentsAndOrder from "./components/PaymentsAndOrder";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="flex flex-col" >
      <Header />
       {/* <HeroSection /> */}
      <FastestWay />
     <EverythingYouNeed />
      {/* <PaymentsAndOrder /> */}
       <CallToAction /> 
    </div>
  );
}

export default App;
