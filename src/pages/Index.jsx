import Navbar from "../components/Navbar";


export default function Index() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
    </div>
  );
}

function HeroSection () {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 mb-8">Your Perfect Brew, Just a Tap Away</h1>
            <p className="text-gray-600 text-lg mb-10 xl:mb-0 md:pr-10">
              Imagine waking up to the aroma of freshly roasted coffee, the promise of a perfect cup waiting to be savored. At [Your Brand Name], we're not just selling coffee beans; we're delivering an experience. We meticulously source the finest beans from around the globe, working directly with farmers who share our passion for quality and sustainability. Whether you crave the boldness of a dark roast, the nuanced flavors of a single-origin, or the comforting familiarity of a classic blend, we have the perfect coffee to elevate your morning ritual.
            </p>
            <div className="my-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}