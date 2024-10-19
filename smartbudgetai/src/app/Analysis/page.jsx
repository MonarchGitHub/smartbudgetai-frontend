"use client";
import BottomNavBar from "@/Components/Navbar/BottomNavbar";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card.jsx";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useState } from "react";

import { BellIcon, CreditCard, Divide, TrendingUpIcon } from "lucide-react";
import React from "react";

const Analysis = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const expenseData = [
    { name: "Housing", value: 1500 },
    { name: "Food", value: 500 },
    { name: "Transportation", value: 300 },
    { name: "Utilities", value: 200 },
    { name: "Entertainment", value: 150 },
    { name: "Other", value: 350 },
  ];

  const incomeVsExpenseData = [
    { name: "Income", value: 4000 },
    { name: "Expenses", value: 3000 },
  ];

  const savingsData = [
    { month: "Jan", savings: 500 },
    { month: "Feb", savings: 700 },
    { month: "Mar", savings: 600 },
    { month: "Apr", savings: 800 },
    { month: "May", savings: 1000 },
    { month: "Jun", savings: 900 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];
  const aiInsights = [
    "Your housing expenses are within the recommended 30% of your budget.",
    "You're spending more on food than the average in your area. Consider meal prepping to reduce costs.",
    "Great job on keeping transportation costs low!",
    "Your entertainment budget is well-balanced.",
  ];
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const totalIncome = incomeVsExpenseData[0].value;
  const totalExpenses = incomeVsExpenseData[1].value;
  const netSavings = totalIncome - totalExpenses;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold ">AI Budget Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Expense Distribution</CardTitle>
            <CardDescription>Breakdown of expenses by category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                >
                  {expenseData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <p className="font-semibold">
                {expenseData[activeIndex].name}: $
                {expenseData[activeIndex].value}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <CardDescription>
              Smart analysis of your spending habits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {aiInsights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <TrendingUpIcon className="h-5 w-5 mr-2 text-primary" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Income vs Expenses</CardTitle>
            <CardDescription>
              Comparison of total income and expenses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={incomeVsExpenseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Savings Trend</CardTitle>
            <CardDescription>Monthly savings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={savingsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="savings" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Analysis;
