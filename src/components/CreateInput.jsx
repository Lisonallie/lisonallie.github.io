import { useState } from "react";
import axios from "axios";
import React from "react";

const CreateInput = () => {
  const [title, setTitle] = useState(""); // '' is the initial state value
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleCreate = () => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/create_note.php/?title=${title}&author=${author}`
    }).then(response => {
      console.log(response);
    });
  };

  return (
    <React.Fragment>
      <div className="inputHolder">
        <span className="editTitle">Create New Note</span>
        <br></br>
        <br></br>
        <input
          className="inputTitle"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        ></input>
      </div>
      <br></br>
      <div className="inputHolder">
        <input
          className="inputText"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Author"
        ></input>
        <br></br><br></br>
        <div className="inputHolder">
          <input
            className="inputText"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Content"
          ></input>
          <br></br>
        </div>
        <button onClick={handleCreate} className="btn btn-success submit">
          Create
        </button>
      </div>
    </React.Fragment>
  );
};

export default CreateInput;
