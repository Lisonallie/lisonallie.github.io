import { useState } from "react";
import axios from "axios";
import React from "react";

const CreateInput = () => {
  const [title, setTitle] = useState(""); // '' is the initial state value
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleCreate = () => {
    let data = new URLSearchParams();
    data.append("text", text);
    axios({
      method: "POST",
      url: `http://localhost:4567/becode-database-api/create_note.php/?title=${title}&author=${author}`,
      data: data
    }).then(response => {
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
        <br></br>
        <br></br>
        <form method="POST">
          <div className="inputHolder">
            <input
              formMethod="POST"
              className="inputText"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Content"
            ></input>
            <br></br>
          </div>
        </form>
        <button onClick={handleCreate} className="btn btn-success submit">
          Create
        </button>
      </div>
    </React.Fragment>
  );
};

export default CreateInput;
