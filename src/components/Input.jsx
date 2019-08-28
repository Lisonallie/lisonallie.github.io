import { useState } from "react";
import React from "react";

const Input = () => {
  const [title, setTitle] = useState(""); // '' is the initial state value
  const [newText, setNewText] = useState("");

  return (
    <div>
      <input
        value={title}
        onInput={e => setTitle(e.target.value)}
        className="inputText"
        placeholder="Title of note you want to change"
      ></input>
      <input
        value={newText}
        onInput={e => setNewText(e.target.value)}
        className="inputNewText"
        placeholder="New text to be inserted"
      ></input>
    </div>
  );
};

export default Input;
