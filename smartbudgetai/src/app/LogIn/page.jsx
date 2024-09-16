import Link from "next/link";
import { Button } from "../../Components/ui/button.jsx";
import { Checkbox } from "../../Components/ui/checkbox.jsx";
import { Input } from "../../Components/ui/input.jsx";
import { Label } from "../../Components/ui/label.jsx";
import { PiggyBank } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8 px-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg sm:px-10 py-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <PiggyBank className="h-12 w-12 text-violet-500" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm text-muted-foreground">
            Log in to your account to continue
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address">Email address</Label>
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember-me" name="remember-me" />
              <Label htmlFor="remember-me" className="ml-2 block text-sm">
                Remember me
              </Label>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Not a member?{" "}
          <Link
            href="/SignUp"
            className="font-medium text-primary hover:text-primary/80"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
