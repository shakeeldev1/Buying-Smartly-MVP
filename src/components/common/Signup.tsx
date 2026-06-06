import { useState } from 'react'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    return (
        <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md overflow-hidden rounded-4xl border border-slate-700 bg-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="relative p-5 sm:p-6 md:p-7">
                    <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#D4AF37]/8 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#D4AF37]/8 blur-3xl" />

                    <div className="relative z-10">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white">Create Account</h2>
                            <p className="mt-2 text-sm text-slate-400">Sign up to access premium buying, booking, and sourcing services.</p>
                        </div>

                        <form className="mt-6 space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Full Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full h-12 rounded-2xl border border-slate-700 bg-slate-800 pl-12 pr-4 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:bg-slate-800 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full h-12 rounded-2xl border border-slate-700 bg-slate-800 pl-12 pr-4 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:bg-slate-800 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Phone Number</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full h-12 rounded-2xl border border-slate-700 bg-slate-800 pl-12 pr-4 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:bg-slate-800 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create a password"
                                        className="w-full h-12 rounded-2xl border border-slate-700 bg-slate-800 pl-12 pr-14 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:bg-slate-800 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">Confirm Password</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input
                                        type={showConfirm ? 'text' : 'password'}
                                        placeholder="Confirm your password"
                                        className="w-full h-12 rounded-2xl border border-slate-700 bg-slate-800 pl-12 pr-14 text-white placeholder-slate-500 outline-none transition-all duration-300 focus:bg-slate-800 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    >
                                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="group mx-auto flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c7a52d] hover:shadow-lg"
                            >
                                Create Account
                                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <p className="text-center text-sm text-slate-400">
                                Already have an account?{' '}
                                <a href="/signin" className="font-semibold text-[#D4AF37] hover:text-[#b8941f]">
                                    Sign In
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
