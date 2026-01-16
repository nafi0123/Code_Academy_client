"use client";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthProvider";

export default function MyCoursesTile() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const [myCourses, setMyCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    fetch(
      `https://code-academy-server-ebon.vercel.app/my-course?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyCourses(data);
        setLoadingCourses(false);
      })
      .catch(() => setLoadingCourses(false));
  }, [user, loading, router]);

  if (loading || loadingCourses)
    return (
      <p className="text-center mt-12 text-gray-600">
        Loading your courses...
      </p>
    );


  if (!myCourses.length)
    return (
      <div className="text-center mt-12">
        <p className="text-gray-500 text-lg">
          You have not enrolled in any courses yet.
        </p>
        <p className="text-indigo-600 mt-2 mb-4">
          Explore courses and start learning today!
        </p>
        <button
          onClick={() => router.push("/allCourses")}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition mb-2"
        >
          Browse Courses
        </button>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Your Enrolled Courses
      </h2>

      <div className="space-y-6">
        {myCourses.map((course) => (
          <div
            key={course._id}
            className="w-full bg-white shadow-md rounded-xl p-5 sm:flex items-center gap-5 hover:shadow-lg transition-all border border-gray-100"
          >
            {/* Image */}
            <img
              src={
                course.image ||
                "https://via.placeholder.com/350x220?text=No+Image"
              }
              alt={course.title}
              className="w-full sm:w-60 h-40 object-cover rounded-lg mb-4 sm:mb-0"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-x-6 text-sm text-gray-700">
                <p>
                  <span className="font-semibold text-indigo-700">
                    Price:
                  </span>{" "}
                  {course.price}
                </p>
                <p>
                  <span className="font-semibold text-indigo-700">
                    Category:
                  </span>{" "}
                  {course.category}
                </p>
              </div>

              {course.enrolledAt && (
                <p className="text-xs text-gray-400 mt-2">
                  Enrolled on:{" "}
                  {new Date(course.enrolledAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
