export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 pt-24 px-4 md:px-8">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
          Discover CodeNest
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          At <span className="font-semibold text-purple-600">CodeNest</span>, we empower curious minds to explore programming, build creative projects, and turn ideas into reality.  
          Whether you're taking your first steps in coding or sharpening advanced skills, we provide a path to grow and succeed.
        </p>
      </section>

      {/* Our Journey Section */}
      <section className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Our Journey</h2>
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
          CodeNest started with a vision: making learning code simple, engaging, and hands-on.  
          We focus on practical lessons, fun challenges, and real-world exercises that turn learners into confident developers.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Thousands of students worldwide have trusted us to guide them, gain practical experience, and explore the limitless possibilities of technology.
        </p>
      </section>

      {/* Our Vision Section */}
      <section className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          We envision a community where anyone can learn coding with confidence and creativity.  
          Our goal is to provide clear, actionable, and inspiring content that motivates learners to experiment, innovate, and contribute to the tech world.
        </p>
      </section>

    </div>
  );
}
