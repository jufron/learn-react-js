import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";


export default function ProfileAddress() {
  const profile = useContext(ProfileContext);

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md">
      <h1 className="text-xl font-semibold mb-2">Profile Address</h1>
      <p className="text-gray-700">alamat : {profile.name}</p>
    </div>
  );
}
