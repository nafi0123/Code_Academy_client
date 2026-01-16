"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Level Up Your Coding Skills?
          </h2>
          <p className="text-gray-100 mb-6">
            Join thousands of learners who are mastering programming, building real projects,
            and advancing their careers with CodeNest.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white text-indigo-700 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
            <p className="text-gray-600 text-sm">
              Work on real-world projects to build your portfolio and gain practical experience.
            </p>
          </div>
          <div className="bg-white text-indigo-700 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p className="text-gray-600 text-sm">
              Learn from industry professionals and get guidance to achieve your goals faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
