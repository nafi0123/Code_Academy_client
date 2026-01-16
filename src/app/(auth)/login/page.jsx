"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import app from "@/firebase/firebase";


export default function Login() {
  const router = useRouter();
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLog = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemo = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, "demo@gmail.com", "123456");
      toast.success("Demo login successful!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Toaster position="top-center" />
      
      {/* Left - Branding */}
      <div className="md:w-1/2 bg-indigo-700 text-white flex flex-col justify-center p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome Back to <span className="text-teal-400">CodeAcademy</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl">
          Log in to continue learning and building amazing projects.
        </p>
      </div>

      {/* Right - Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">Log In</h2>

          <form className="space-y-4" onSubmit={handleLog}>
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
                placeholder="Enter password"
              />
            </div>
            <button 
              type="submit" 
              className="btn w-full bg-indigo-600 text-white"
            >
              {loading ? "Loading..." : "Log In"}
            </button>
          </form>

          {/* Demo & Google Buttons */}
          <div className="mt-4 space-y-2">
            <button 
              onClick={handleDemo} 
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Demo Login
            </button>

            <button 
              onClick={handleGoogle} 
              className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition shadow-sm"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5"/>
              Continue with Google
            </button>
          </div>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link href="/register" className="text-indigo-600 font-semibold hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
