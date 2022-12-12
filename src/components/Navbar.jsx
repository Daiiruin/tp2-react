import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import Profile from "../images/profile.png";
import "./Navbar.css";

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">MessWMe</span>
      <div className="user">
        <img className="profileLogo" src={Profile} alt="profile" />
        <p className="profileName">{currentUser.displayName}</p>
        <button onClick={() => signOut(auth)} className="logOutButton">
          Log Out
        </button>
      </div>
    </div>
  );
};
