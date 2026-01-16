"use client";

export default function HighlightSection() {
  const features = [
    {
      title: "Interactive Lessons",
      description:
        "Learn coding through hands-on exercises and interactive tutorials that make concepts easy to grasp.",
    },
    {
      title: "Real Projects",
      description:
        "Build real-world projects that you can showcase in your portfolio and get practical experience.",
    },
    {
      title: "Community Support",
      description:
        "Join a global community of learners and mentors to ask questions, share ideas, and grow together.",
    },
  ];

  return (
    <section className="bg-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
          Why Choose CodeNest
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Our platform is designed to give you practical skills, hands-on experience, 
          and the community support you need to become a confident developer.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="h-12 w-12 mb-4 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
