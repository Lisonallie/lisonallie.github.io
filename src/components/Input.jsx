import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const Input = () => {
  const [title, setTitle] = useState(""); // '' is the initial state value
  const [newText, setNewText] = useState("");

  useEffect((title, newText) => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/update_note.php/?text=${title}&newtext=${newText}`
    }).then(response => {
    });
  }, []);

  return (
    <React.Fragment>
      <div>
        <input
          className="inputTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title of note you want to change"
        ></input>
      </div>
      <br></br>
      <div>
        <input
          className="inputText"
          value={newText}
          onChange={e => setNewText(e.target.value)}
          placeholder="New text to be inserted"
        ></input>
      </div>
    </React.Fragment>
  );
};

export default Input;
