"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

export default function PopularCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://code-academy-server-ebon.vercel.app/courses/top6")
      .then((res) => res.json())
      .then((data) => setCourses(Array.isArray(data) ? data : data.topCourses || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-3">
          Popular Courses
        </h2>
        <p className="text-center text-gray-600 text-base max-w-2xl mx-auto mb-14">
          Explore our top-rated courses, handpicked to help you grow your coding
          skills and advance your tech career.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
