"use client";
import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserIcon from "../../../public/UserIcon";
import SearchIcon from "../../../public/SearchIcon";
import BellIcon from "../../../public/BellIcon";
import FishIcon from "../../../public/FishIcon";
import ShoppingCartIcon from "../../../public/ShoppingCartIcon";
import ReceiptIcon from "../../../public/ReceiptIcon";
import PiggyBankIcon from "../../../public/PiggyBankIcon";
import AppleIcon from "../../../public/AppleIcon";
import AirplayIcon from "../../../public/AirplayIcon";
import HomeIcon from "../../../public/HomeIcon";
import BarChartIcon from "../../../public/BarChartIcon";
import ExpandIcon from "../../../public/ExpandIcon";
import SettingsIcon from "../../../public/SettingsIcon";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../lib/firebase.js";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for logged-in user
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/"); // Redirect if not logged in
      setUser(currentUser);
      console.log("current user is", currentUser);
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-4">
      <section className="text-gray-600 body-font w-full">
        {/* name div */}
        <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
          <div className="flex items-center space-x-2">
            <SearchIcon className="w-6 h-6 text-gray-500" />
            <h1 className="text-lg font-semibold">
              {/* Hi, {data ? JSON.stringify(data) : "Loading..."} */}
              Hi, Monarch
            </h1>
          </div>
          <BellIcon className="w-6 h-6 text-gray-500" />
        </header>

        <main className="flex mt-1 flex-col items-center w-full space-y-4">
          {/* <Card className="w-full p-4 bg-white shadow-md"> */}
          <div className="w-full mb-1 flex flex-col items-center space-y-2 bg-violet-200 rounded-md ">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <UserIcon className="w-8 h-8 text-gray-500" />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Monthly budget</p>
              <p className="text-xl font-semibold">₹ 30,000</p>
            </div>
            <div className="flex justify-between w-full px-4 py-2 bg-gray-100 rounded-md  bg-violet-100">
              <div className="text-center">
                <p className="text-xs text-gray-500">Income</p>
                <p className="text-sm font-semibold">₹ 50,000</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Expense</p>
                <p className="text-sm font-semibold">₹ 12,786</p>
              </div>
            </div>
          </div>
          {/* </Card> */}
          <div className="w-full p-4 bg-white shadow-md">
            <h2 className="text-lg font-semibold">Top Spendings</h2>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <FishIcon className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Food</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <ShoppingCartIcon className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Shopping</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <ReceiptIcon className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Rent</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <PiggyBankIcon className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Investment</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 bg-white shadow-md">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <div className="flex justify-between mt-2">
              <div className="flex items-center space-x-2">
                <AppleIcon className="w-6 h-6 text-gray-500" />
                <p className="text-sm font-semibold">Amazon</p>
              </div>
              <p className="text-sm font-semibold">- ₹ 2000</p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center space-x-2">
                <AirplayIcon className="w-6 h-6 text-gray-500" />
                <p className="text-sm font-semibold">Spotify</p>
              </div>
              <p className="text-sm font-semibold">- ₹ 700</p>
            </div>
          </div>
        </main>
      </section>
      {/* <footer className="fixed bottom-0 w-full flex justify-between p-4 bg-white shadow-md">
        <HomeIcon className="w-6 h-6 text-gray-500" />
       <SettingsIcon className="w-6 h-6 text-gray-500" />
        <ExpandIcon className="w-6 h-6 text-gray-500" />
        <SettingsIcon className="w-6 h-6 text-gray-500" />
        <UserIcon className="w-6 h-6 text-gray-500" />
      </footer> */}
      <BottomNavBar />
    </div>
  );
};

export default Home;
