import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";


export default function ProfileApp() {
  const [ name, setName ] = useState('');

  const profile = {
    name,
    setName
  };

  return (
    <>
      <ProfileContext.Provider value={profile}>
        <ProfileForm />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
