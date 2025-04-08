import InputForm from "../components/auth/InputForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-100 flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
            <form>
              <InputForm 
                labelName="Email"
                inputName="email"
                id="email"
                type="email"
                placeholder="Your email"
              />
              <InputForm
                labelName="Password"
                inputName="password"
                id="password"
                type="password"
                placeholder="Your password"
              />
              
              <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>    
      </div>
      <Footer />
    </>
  );
}