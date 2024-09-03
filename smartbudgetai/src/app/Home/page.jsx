"use client";
import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  function handleClick() {
    console.log("clicked");
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data: result } = await axios.get(
        "https://smartbudgetai-backend.onrender.com/testing"
      );
      setData(result);
    }
    fetchData();
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div onClick={handleClick()}>This is Home page </div>
        <div>{data ? JSON.stringify(data) : "Loading..."}</div>
      </div>

      <BottomNavBar />
    </section>
  );
};

export default Home;
