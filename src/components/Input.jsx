import { useState } from "react";
import React from "react";

const Input = () => {
  const [text, setText] = useState(""); // '' is the initial state value
  const [newText, setNewText] = useState("");

  return (
    <div>
      <input
        value={text}
        onInput={e => setText(e.target.value)}
        className="inputText"
        placeholder="Text you want to change"
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
