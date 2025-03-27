import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h1>Component turunan profil</h1>
      <p>hello {profile}</p>
    </>
  );
}