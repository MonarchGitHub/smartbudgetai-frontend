import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import React from "react";

const Analysis = () => {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div onClick={handleClick()}>This is Analysis page </div>
      </div>

      <BottomNavBar />
    </section>
  );
};

export default Analysis;
