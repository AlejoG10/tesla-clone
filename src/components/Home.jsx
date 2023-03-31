import React from "react";
import { Section } from "./";

function Home() {
  return (
    <>
      <Section
        id="model-3"
        title="Model 3"
        descr="Order Online for Touchless Delivery"
        bgImg="bg-[url('assets/models/model-3.jpeg')]"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        id="model-y"
        title="Model Y"
        descr="Order Online for Touchless Delivery"
        bgImg="bg-[url('assets/models/model-y.jpeg')]"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        id="model-s"
        title="Model S"
        descr="Order Online for Touchless Delivery"
        bgImg="bg-[url('assets/models/model-s.jpeg')]"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        id="model-x"
        title="Model X"
        descr="Order Online for Touchless Delivery"
        bgImg="bg-[url('assets/models/model-x.jpeg')]"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        id="solar-panels"
        title="Solar Panels"
        descr="Lowest Cost Solar Panels in America"
        bgImg="bg-[url('assets/products/solar-panels.jpeg')]"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        id="solar-roof"
        title="Solar Roof"
        descr="Produce Clean Energy From Your Roof"
        bgImg="bg-[url('assets/products/solar-roof.jpg')]"
        leftBtn="Order Now"
        rightBtn="Learn More"
      />
      <Section
        id="accessories"
        title="Accessories"
        bgImg="bg-[url('assets/products/accessories.jpeg')]"
        leftBtn="Shop Now"
        last
      />
    </>
  );
}

export default Home;
