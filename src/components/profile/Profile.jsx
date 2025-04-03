import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";


export default function Profile() {
  const profile = useContext(ProfileContext);

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-2">Profile</h1>
      <p className="text-gray-700">Hello {profile.name}</p>
    </div>
  );
}
