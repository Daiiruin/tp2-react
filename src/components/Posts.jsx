import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import "./Posts.css";

export const Posts = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const text = e.target[1].value;

    console.log(title);
    console.log(text);
  };
  return (
    <div className="containerAddPost">
      <p>Alors {currentUser.displayName}, que racontez vous aujourd'hui ?</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Your life..." />
        <button>Post</button>
      </form>
    </div>
  );
};
