import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-[#f6f2e9] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

        {/* Header */}
        <div className="bg-[#0f0f10] px-8 py-10 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-2xl" />

          <h2 className="text-3xl font-bold text-white">
            Log In
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Enter your email and password to continue.
          </p>
        </div>

        {/* Form Area */}
        <div className="p-6 sm:p-8">

          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-2xl border border-zinc-200 bg-zinc-50 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-[#D4AF37] hover:text-[#c7a52d]"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-2xl border border-zinc-200 bg-zinc-50 pl-12 pr-14 outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <label className="flex items-center gap-2 text-sm text-zinc-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#D4AF37]"
                />
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group mx-auto flex h-12 w-48 items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7a52d] hover:shadow-lg"
            >
              Log In

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Register */}
            <p className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-[#D4AF37] hover:text-[#c7a52d]"
              >
                Create Account
              </a>
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;