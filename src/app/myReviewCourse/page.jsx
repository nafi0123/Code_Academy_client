"use client";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/Context/AuthProvider";

export default function MyReviewCourse() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  // Fetch user reviews
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://code-academy-server-ebon.vercel.app/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [user]);

  // Handle delete review
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this review?");
    if (!confirm) return;

    try {
      const res = await fetch(`https://code-academy-server-ebon.vercel.app/reviews/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setReviews(prev => prev.filter(r => r._id !== id));
        alert("Review deleted successfully!");
      } else {
        alert("Failed to delete review");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting review");
    }
  };

  if (!reviews.length)
    return <p className="text-center mt-10 text-gray-500">No reviews yet.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">My Reviews</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-md">
          <thead className="bg-indigo-100">
            <tr>
              <th className="py-2 px-4 text-left">Course Title</th>
              <th className="py-2 px-4 text-left">Review</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r._id} className="border-t">
                <td className="py-2 px-4">{r.courseTitle}</td>
                <td className="py-2 px-4">{r.reviewText}</td>
                <td className="py-2 px-4">{new Date(r.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => alert(r.reviewText)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(r._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
