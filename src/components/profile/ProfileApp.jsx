import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";


export default function ProfileApp() {
  const [ name, setName ] = useState('');
  
  return (
    <>
      <ProfileForm name={name} setName={setName} />

      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}