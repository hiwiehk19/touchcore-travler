import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FastestWay from "./components/FastestWay";
 import EverythingYouNeed from "./components/EverythingYouNeed";
import PaymentsAndOrder from "./components/PaymentsAndOrder";
import CallToAction from "./components/CallToAction";
import EasyToUse from "./components/EasyToUse";


function App() {
  return (
    <div className="flex flex-col" >
      <Header />
       {/* <HeroSection /> */}
      <FastestWay />
     <EverythingYouNeed />
       {/* <PaymentsAndOrder />  */}
       <EasyToUse/> 
    </div>
  );
}

export default App;
