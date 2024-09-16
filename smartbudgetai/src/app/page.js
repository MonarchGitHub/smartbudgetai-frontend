import { Button } from "../Components/ui/button.jsx";
import { AppleIcon, DollarSign, LineChart, LogInIcon, LucideArrowUpRightFromSquare, PiggyBank, Shield, SignalIcon, Smartphone, SmartphoneIcon, UtilityPole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <>

      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <PiggyBank className="h-6 w-6" />
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              SmartBudgetAI
            </Link>

          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Manage Your Money with AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    SmartBudgetAI helps you take control of your finances with smart, personalized budgeting powered by artificial intelligence.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="inline-flex items-center justify-center">
                    <LogInIcon className="mr-2 h-4 w-4" />
                    <Link href="/SignUp"> Sign Up </Link>
                  </Button>
                  <Button variant="outline" className="inline-flex items-center justify-center">
                    <LucideArrowUpRightFromSquare className="mr-2 h-4 w-4" />
                    <Link href="/LogIn"> Log In </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Key Features</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <DollarSign className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold">Smart Expense Tracking</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Automatically categorize and track your expenses with AI-powered insights.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <LineChart className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold">Personalized Budgets</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Get custom budget predictions based on your spending habits and financial goals.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  <Shield className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold">Secure and Private</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Your financial data is protected with industry-leading security.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Take Control of Your Finances?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    SignUp for SmartBudgetAI today and start your journey to financial freedom.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button className="inline-flex items-center justify-center">
                    <LogInIcon className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                  <Button variant="outline" className="inline-flex items-center justify-center">
                    <LucideArrowUpRightFromSquare className="mr-2 h-4 w-4" />
                    Log In
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024  SmartBudgetAI. All rights reserved.</p>

        </footer>
      </div>

    </>
  );
}



