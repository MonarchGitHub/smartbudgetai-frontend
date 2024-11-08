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
import { ArrowBigDownDashIcon, PlusIcon } from "lucide-react";

const transactions = [
  {
    id: 1,
    name: "Amazon",
    amount: 2000,
    icon: <AppleIcon className="w-6 h-6 text-gray-500" />,
  },
  {
    id: 2,
    name: "Spotify",
    amount: 700,
    icon: <AirplayIcon className="w-6 h-6 text-gray-500" />,
  },
  // Add more transactions as needed
];

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

  const [showBudgetPopup, setShowBudgetPopup] = useState(false);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [recentTransactions, setRecentTransactions] = useState(transactions);

  const handleOpenBudgetPopup = () => {
    setShowBudgetPopup(true);
  };

  const handleCloseBudgetPopup = () => {
    setShowBudgetPopup(false);
  };
  const handleSaveBudget = () => {
    setShowBudgetPopup(false);
  };

  const addTransaction = () => {
    const newTransaction = {
      id: recentTransactions.length + 1,
      name: expenseName,
      amount: expenseAmount,
      icon: <PlusIcon className="w-6 h-6 text-gray-500" />, // Default icon if none provided
    };

    setRecentTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 p-4">
      <section className="text-gray-600 body-font w-full">
        {/* name div */}
        <header className="flex items-center justify-between w-full p-4 bg-white shadow-md">
          <div className="flex items-center space-x-2">
            <SearchIcon className="w-6 h-6 text-gray-500" />
            <h1 className="text-lg font-semibold">
              {/* Hi, {data ? JSON.stringify(data) : "Loading..."} */}
              Hi, Harsh Yadav
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
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between mt-2">
                <div className="flex items-center space-x-2">
                  {transaction.icon}
                  <p className="text-sm font-semibold">{transaction.name}</p>
                </div>
                <p className="text-sm font-semibold">
                  {transaction.amount < 0
                    ? `- ₹ ${Math.abs(transaction.amount)}`
                    : `₹ ${transaction.amount}`}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={handleOpenBudgetPopup}
            className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition ease-in-out duration-200"
          >
            Add Expense
          </button>

          {showBudgetPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
              <div className="bg-white p-6 rounded-lg shadow-lg transdiv transition-all scale-95 md:w-1/3 sm:w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Enter Expense Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expense Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Expense name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                      onChange={(e) => setExpenseName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expense Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
                      onChange={(e) => setExpenseAmount(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end space-x-3 mt-4">
                    <button
                      type="button"
                      onClick={handleCloseBudgetPopup}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition ease-in-out duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ease-in-out duration-200"
                      onClick={addTransaction}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
