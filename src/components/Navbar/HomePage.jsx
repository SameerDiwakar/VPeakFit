import React from "react";
import Logo from "../Body/Logo/Logo";
import Carousel from "../Body/Carousel/Carousel";
import Panel from "../Body/Panel/Panel";

const HomePage = () => {
  return (
    <main className="bg-neutral-50 text-neutral-800">
      <Carousel />
      <Logo />
      <Panel />
    </main>
  );
};

export default HomePage;
