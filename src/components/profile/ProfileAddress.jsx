import { useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function ProfileAddress() {
  const profile = useContext(ProfileContext);

  return (
    <>
      <h1>komponent turunan Profile Address</h1>
      <p>alamat {profile}</p>
    </>
  )
}