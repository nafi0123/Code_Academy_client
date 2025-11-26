"use client";

import CourseCard from "@/components/CourseCard";
import { useEffect, useState } from "react";
// import CourseCard from "./CourseCard";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://code-academy-server-ebon.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setCourses(data?.courses || []);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load courses");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-3">
          All Courses
        </h2>
        <p className="text-center text-gray-600 text-base max-w-2xl mx-auto mb-14">
          Browse all available courses and boost your learning journey.
        </p>

        {/* Loader */}
        {loading && (
          <p className="text-center text-gray-500 text-lg">Loading courses...</p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-center text-red-500 text-lg">{error}</p>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

        {/* No courses fallback */}
        {!loading && courses.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-10">
            No courses available.
          </p>
        )}
      </div>
    </section>
  );
}
