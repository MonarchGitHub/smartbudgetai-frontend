import Link from "next/link";
import { Button } from "../../Components/ui/button.jsx";
import { Checkbox } from "../../Components/ui/checkbox.jsx";
import { Input } from "../../Components/ui/input.jsx";
import { Label } from "../../Components/ui/label.jsx";
import { PiggyBank } from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8 px-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg sm:px-10 py-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <PiggyBank className="h-12 w-12 text-violet-500" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Create an account
          </h2>
          <p className="text-sm text-muted-foreground">
            Sign up to start managing your finances with AI
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="name">Full Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email-address">Email address</label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="email-address">Phone Number</label>
              <Input
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                required
                className="mt-1"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox id="terms" name="terms" required />
            <label htmlFor="terms" className="ml-2 block text-sm">
              I agree to the{" "}
              <Link
                href="/terms"
                className="font-medium text-primary hover:text-primary/80"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary hover:text-primary/80"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/LogIn"
            className="font-medium text-primary hover:text-primary/80"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
