"use client";
import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase.js";
import { useRouter } from "next/navigation";
import { Button } from "../../Components/ui/button.jsx";
import { Card } from "../../Components/ui/card.jsx";
import BellIcon from "../../../public/BellIcon";
import { CreditCard, LogOut, PieChart } from "lucide-react";

const Profile = () => {
  const router = useRouter();
  function handleClick() {
    console.log("clicked");
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect to login page after logout
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 p-4 pt-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button size="icon" variant="ghost">
            <BellIcon className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
        <Card className="mb-6">
          <div className="p-4">
            <div className="flex items-center space-x-4">
              <img
                alt="Profile picture"
                className="rounded-full"
                height="80"
                // src="/placeholder.svg?height=80&width=80"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div>
                <h2 className="text-xl font-semibold">Harsh</h2>
                <p className="text-sm text-gray-500">Harsh@gmail.com</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="mb-6">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
            <p className="text-3xl font-bold">₹5,240.00</p>
            <p className="text-sm text-green-600 flex items-center mt-1">
              3.5% from last month
            </p>
          </div>
        </Card>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            className="h-auto py-4 flex flex-col items-center justify-center"
            variant="outline"
          >
            <CreditCard className="h-6 w-6 mb-2" />
            Edit User Details
          </Button>
          <Button
            className="h-auto py-4 flex flex-col items-center justify-center"
            variant="outline"
          >
            <LogOut onClick={handleLogout} className="h-6 w-6 mb-2" />
            Logout
          </Button>
        </div>
        <h3 className="text-lg font-semibold mb-2">User Details</h3>
        <Card>
          <div className="p-0">
            <ul className="divide-y divide-gray-200">
              {[
                { name: "Phone Number", value: "987654345" },
                { name: "Gender", value: "Male" },
              ].map((transaction, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4"
                >
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-violet-600">
                      {transaction.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </main>
      <BottomNavBar />
    </div>
  );
};

export default Profile;
