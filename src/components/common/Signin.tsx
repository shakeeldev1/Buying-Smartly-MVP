import { useState } from 'react';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-[#f8f6f1] flex items-center justify-center px-4 py-2">
      <div className="w-full max-w-md overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <div className="relative p-5 sm:p-6 md:p-7">

          {/* Background Blur Effects */}
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#D4AF37]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#D4AF37]/5 blur-3xl" />

          <div className="relative z-10">

            {/* Heading */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#0f0f10]">
                Sign In
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Enter your email and password to continue.
              </p>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-5">

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
                    className="w-full h-12 rounded-2xl border border-zinc-200 bg-zinc-50 pl-12 pr-4 outline-none transition-all duration-300 focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
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
                    className="text-sm font-medium text-[#D4AF37] hover:text-[#b8941f]"
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
                    className="w-full h-12 rounded-2xl border border-zinc-200 bg-zinc-50 pl-12 pr-14 outline-none transition-all duration-300 focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
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

              {/* Sign In Button */}
              <button
                type="submit"
                className="group mx-auto flex h-12 w-48 items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7a52d] hover:shadow-lg"
              >
                Sign In

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Register */}
              <p className="text-center text-sm text-zinc-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="font-semibold text-[#D4AF37] hover:text-[#b8941f]"
                >
                  Create Account
                </button>
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;