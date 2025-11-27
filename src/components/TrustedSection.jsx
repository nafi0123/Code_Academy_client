export default function TrustedSection({
  title = "Trusted by Top Tech Brands",
  subtitle = "Thousands of students grow their careers with CodeAcademy — supported by industry-leading companies.",
  titleColor = "text-indigo-700",
  bg = "bg-white"
}) {
  return (
    <section className={`${bg} py-16`}>
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className={`text-3xl font-bold mb-4 ${titleColor}`}>
          {title}
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 place-items-center">
          <div className="text-gray-500 text-lg font-semibold">Google</div>
          <div className="text-gray-500 text-lg font-semibold">Meta</div>
          <div className="text-gray-500 text-lg font-semibold">Microsoft</div>
          <div className="text-gray-500 text-lg font-semibold">Amazon</div>
          <div className="text-gray-500 text-lg font-semibold">Netflix</div>
          <div className="text-gray-500 text-lg font-semibold">GitHub</div>
        </div>

      </div>
    </section>
  );
}
