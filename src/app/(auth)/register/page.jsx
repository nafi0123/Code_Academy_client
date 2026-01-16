"use client";

import { useContext, useState } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const { createUser, loginWithGoogle, loading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, name);
      toast.success("Registration Successful!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Toaster position="top-center" />

      {/* Left */}
      <div className="md:w-1/2 bg-indigo-700 text-white flex flex-col justify-center p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Join <span className="text-teal-400">CodeAcademy</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl">
          Learn modern technologies and build real projects.
        </p>
      </div>

      {/* Right */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Register</h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="input input-bordered w-full mt-1 bg-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input input-bordered w-full mt-1 bg-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="input input-bordered w-full mt-1 bg-white"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="btn w-full bg-indigo-600 text-white"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>

          <button
            onClick={handleGoogle}
            className="w-full mt-4 flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition shadow-sm"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
