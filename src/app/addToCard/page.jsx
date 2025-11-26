"use client";

import { useState } from "react";

export default function addToCard() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    category: "",
    image: "",
    date: "",
    priority: "Medium",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage(null);

  if (!form.title.trim()) {
    setMessage({ type: "error", text: "Title is required." });
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://code-academy-server-ebon.vercel.app/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    setMessage({ type: "success", text: "Course added successfully." });

    // reset form
    setForm({
      title: "",
      shortDescription: "",
      fullDescription: "",
      price: "",
      category: "",
      image: "",
      date: "",
      priority: "Medium",
    });
  } catch (err) {
    console.error(err);
    setMessage({ type: "error", text: "Failed to add course." });
  } finally {
    setLoading(false);
  }
};


  return (
<div className=" py-24">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      {/* Top title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Add New Course
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Fill the form below to publish a new course. Keep the content clear and
        concise.
      </p>

      {/* message */}
      {message && (
        <div
          className={`mb-4 px-4 py-2 rounded-md text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course Title
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="JavaScript Basics Course"
            className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Short + Price + Category row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description
            </label>
            <input
              name="shortDescription"
              value={form.shortDescription}
              onChange={handleChange}
              placeholder="One-line summary of the course"
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="$49"
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>

        {/* Full description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Description
          </label>
          <textarea
            name="fullDescription"
            value={form.fullDescription}
            onChange={handleChange}
            rows={5}
            placeholder="Detailed course content, syllabus, outcomes..."
            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Image + Date + Priority */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://via.placeholder.com/300x200"
              className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              type="date"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Programming"
            className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() =>
              setForm({
                title: "",
                shortDescription: "",
                fullDescription: "",
                price: "",
                category: "",
                image: "",
                date: "",
                priority: "Medium",
              })
            }
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Saving..." : "Add Course"}
          </button>
        </div>
      </form>
    </div>
</div>
  );
}
