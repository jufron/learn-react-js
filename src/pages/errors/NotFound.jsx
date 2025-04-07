import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  function handleClickBackHome () {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404 - Not Found!</h1>
        <p className="mt-2 text-gray-600 mb-10">The page you are looking for does not exist.</p>
        <Button 
          buttonStatus="info"
          buttonText="Back To Home"
          handleClickSearch={handleClickBackHome}
        />
      </div>
    </div>
  );
};

export default NotFound;