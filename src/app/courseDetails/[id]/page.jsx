"use client";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthProvider";

export default function CourseIdDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [review, setReview] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { user, loading: authLoading } = useContext(AuthContext);

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  // Fetch course details
  useEffect(() => {
    fetch(`https://code-academy-server-ebon.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.log(err));
  }, [id]);

  // Fetch user enrolled courses
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://code-academy-server-ebon.vercel.app/my-course?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const enrolledIds = data.map((c) => c.courseId);
        setEnrolledCourses(enrolledIds);
      })
      .catch((err) => console.log(err));
  }, [user]);

  // Handle course enrollment
  const handleEnroll = async () => {
    if (!user?.email) return;

    if (enrolledCourses.includes(id)) {
      alert("You are already enrolled in this course");
      return;
    }

    const enrollData = { courseId: id, email: user.email };

    try {
      const res = await fetch("https://code-academy-server-ebon.vercel.app/my-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enrollData),
      });

      const data = await res.json();
      console.log("Enrolled:", data);
      alert("You have enrolled successfully!");
      setEnrolledCourses((prev) => [...prev, id]);
    } catch (err) {
      console.error("Failed to enroll:", err);
      alert("Failed to enroll");
    }
  };

  // Handle Review submission
  const handleReview = async (e) => {
    e.preventDefault();
    if (!review.trim() || !user?.email) return;

    const reviewData = {
      courseId: id,
      email: user.email,
      reviewText: review,
      courseTitle: course.title,
    };

    try {
      const res = await fetch("https://code-academy-server-ebon.vercel.app/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });

      const data = await res.json();
      console.log("Review Submitted:", data);
      alert("Review submitted successfully!");
      setReview("");
    } catch (err) {
      console.error("Failed to submit review:", err);
      alert("Failed to submit review");
    }
  };

  if (!course || authLoading) return <p className="text-center mt-10">Loading...</p>;

  const isEnrolled = enrolledCourses.includes(id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Course Info */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h1 className="text-3xl font-bold mb-2 text-indigo-700">{course.title}</h1>
        <p className="text-gray-600 mb-4">{course.shortDescription}</p>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-800 mb-2">{course.fullDescription}</p>
        <p className="font-bold text-indigo-600 mb-2">Price: {course.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {course.category}</p>

        {/* Enroll Button */}
        <button
          onClick={handleEnroll}
          disabled={isEnrolled}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
            isEnrolled
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-teal-500 hover:bg-teal-600 text-white"
          }`}
        >
          {isEnrolled ? "Enrolled" : "Enroll Now"}
        </button>
      </div>

      {/* Review Form */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Post Your Review</h2>
        <form onSubmit={handleReview}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here..."
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-semibold"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
