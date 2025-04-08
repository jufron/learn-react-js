import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function About () {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">About Us</h1>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We're passionate about creating innovative solutions that empower individuals and businesses. Our mission is to [Insert your mission statement here]. We believe in [Your core values, e.g., quality, innovation, customer satisfaction].
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in [Year] by [Founders' names], [Your company name] began as [Brief origin story]. Over the years, we've grown and evolved, driven by our commitment to [Key principles/goals]. Today, we continue to strive for excellence in [Your field].
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}