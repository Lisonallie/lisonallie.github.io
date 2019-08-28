import { useState } from "react";
import axios from "axios";
import React from "react";

const Input = () => {
  const [title, setTitle] = useState(""); // '' is the initial state value
  const [newText, setNewText] = useState("");

  
  const handleSubmit = () => {
        axios({
          method: "get",
          url: `http://localhost:4567/becode-database-api/update_note.php/?title=${title}&newtext=${newText}`
        }).then(response => {
            console.log(response);
        });
    }


  return (
    <React.Fragment>
      <div className="inputHolder">
        <span className="editTitle">Edit Note</span><br></br><br></br>
        <input
          className="inputTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title of note you want to change"
        ></input>
      </div>
      <br></br>
      <div className="inputHolder">
        <input
          className="inputText"
          value={newText}
          onChange={e => setNewText(e.target.value)}
          placeholder="New text to be inserted"
        ></input><br></br>
        <button onClick={handleSubmit} className="btn btn-secondary submit">Submit</button>
      </div>
    </React.Fragment>
  );
};

export default Input;
