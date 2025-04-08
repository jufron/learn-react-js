import InputForm from "../components/auth/InputForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
            <form>
              <InputForm 
                labelName="Username"
                inputName="username"
                id="username"
                type="text"
                placeholder="Your Username"
              />
              <InputForm 
                labelName="Email"
                inputName="email"
                id="email"
                type="email"
                placeholder="Your Email"
              />
              <InputForm 
                labelName="Password"
                inputName="password"
                id="password"
                type="password"
                placeholder="Your Password"
              />
              <InputForm 
                labelName="Confirm Password"
                inputName="confirmPassword"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}