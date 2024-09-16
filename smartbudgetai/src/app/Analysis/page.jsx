import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { BellIcon, CreditCard } from "lucide-react";
import React from "react";

const Analysis = () => {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">AI Analysis</h1>
        </div>
      </main>
      <BottomNavBar />
    </div>
  );
};

export default Analysis;
