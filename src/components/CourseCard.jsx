import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-indigo-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* IMAGE */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          {course.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {course.shortDescription}
        </p>

        <div className="flex justify-between items-center mb-5">
          <span className="text-indigo-700 font-semibold text-xl">
            {course.price}
          </span>
          <span className="text-xs text-gray-500">
            {course.date?.slice(0, 10)}
          </span>
        </div>

        {/* DETAILS BUTTON */}
        <Link
          href={`/courseDetails/${course._id.toString()}`}
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
