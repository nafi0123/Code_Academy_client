"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/Context/AuthProvider";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images.png";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleLogout = async () => await logOut();

  const links = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/aboutUs">About Us</Link></li>
      <li><Link href="/allReview">All Review</Link></li>
      {user && (
        <>
          <li><Link href="/myCourse">My Courses</Link></li>
          <li><Link href="/myReviewCourse">My Review Courses</Link></li>
          <li><Link href="/addToCard">Add To Card</Link></li>
          <li><Link href="/allCourses">All Courses</Link></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50 px-4 md:px-8">

      {/* Navbar Start */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-60 p-4 shadow-md">

            {/* Mobile User Info */}
            {user ? (
              <div className="flex items-center gap-3 p-2 border-b mb-3">
                {user.photoURL ? (
                  <img src={user.photoURL} className="w-10 h-10 rounded-full border" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                    {user.displayName?.[0] || user.email?.[0]}
                  </div>
                )}
                <span className="font-semibold text-gray-700">
                  {user.displayName || user.email}
                </span>
              </div>
            ) : null}

            {links}

            {/* MOBILE LOGIN / LOGOUT */}
            {!user ? (
              <>
                <Link href="/login" className="btn btn-sm btn-outline mt-2 w-full">
                  Log In
                </Link>
                <Link href="/register" className="btn btn-sm bg-indigo-600 text-white mt-2 w-full">
                  Register
                </Link>
              </>
            ) : (
              <button onClick={handleLogout}
                className="btn btn-sm bg-red-500 text-white mt-3 w-full">
                Log Out
              </button>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 btn btn-ghost normal-case font-bold text-indigo-600">
          <Image src={Logo} alt="logo" width={40} height={40} className="rounded-full" />
          <span className="text-lg md:text-xl">CodeAcademy</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-700">{links}</ul>
      </div>

      {/* Desktop User Section */}
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="hidden lg:flex items-center gap-3">
            {user.photoURL ? (
              <img src={user.photoURL} className="w-10 h-10 rounded-full border" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                {user.displayName?.[0] || user.email?.[0]}
              </div>
            )}
            <span className="font-semibold">{user.displayName || user.email}</span>

            <button onClick={handleLogout} className="btn btn-sm bg-red-500 text-white">
              Log Out
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="btn btn-outline btn-sm text-indigo-600">Log In</Link>
            <Link href="/register" className="btn btn-sm bg-indigo-600 text-white">Register</Link>
          </div>
        )}
      </div>

    </div>
  );
}
