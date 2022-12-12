import { useState } from "react";
import "./AddPost.css";
import { Posts } from "./Posts";

export const AddPost = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="containerAdd">
        <button onClick={() => setShow(!show)} className="addButton">
          + Add Post
        </button>
      </div>
      {show ? <Posts /> : <></>}
    </div>
  );
};
