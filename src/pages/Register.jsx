import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import "./Register.css";

export const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const storageRef = ref(storage, email);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (error) => {
            setErr(true);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                await updateProfile(res.user, {
                  displayName,
                });
                await setDoc(doc(db, "users", email), {
                  uid: res.user.uid,
                  displayName,
                  email,
                  password,
                });

                await setDoc(doc(db, "userPost", email), {});
                navigate("/login");
              }
            );
          }
        );
      })
      .catch((err) => {
        setErr(true);
      });
  };

  return (
    <div className="registerContainer">
      <div className="backgroundImage"></div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">MessWMe</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password (6+)" />
            <input style={{ display: "none" }} type="file" id="file" />
            <button>Sign Up</button>
            {err && (
              <span style={{ color: "red" }}>
                Mail already taken or password to short (6+)
              </span>
            )}
          </form>
          <p>
            You already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
