import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";


export default function ProfileForm () {
  // ? get obj from profilecontext and spread
  const { name, setName } = useContext(ProfileContext);

  function handleChange (e) {
    setName(e.target.value);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Profile form</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
