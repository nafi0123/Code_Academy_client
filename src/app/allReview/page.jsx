"use client";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthProvider";

export default function AllReview() {
  const { user, loading: authLoading } = useContext(AuthContext);
  const router = useRouter();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    // Redirect to login if user is not logged in
    if (!user) {
      router.push("/login");
      return;
    }

    // Fetch reviews
    fetch("https://code-academy-server-ebon.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data || []); // ensure it's always an array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setReviews([]); // fallback to empty array
        setLoading(false);
      });
  }, [user, authLoading, router]);

  if (loading || authLoading) {
    return (
      <p className="text-center mt-10 text-gray-600">Loading reviews...</p>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        No reviews found yet.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        All Reviews
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Course Title</th>
              <th className="py-3 px-6 text-left">User Email</th>
              <th className="py-3 px-6 text-left">Review</th>
              <th className="py-3 px-6 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((rev, index) => (
              <tr
                key={rev._id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{rev.courseTitle}</td>
                <td className="py-3 px-6">{rev.email}</td>
                <td className="py-3 px-6">{rev.reviewText}</td>
                <td className="py-3 px-6">
                  {rev.date
                    ? new Date(rev.date).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
