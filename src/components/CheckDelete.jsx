import { useState } from "react";
import axios from "axios";
import React from "react";

const CheckDelete = () => {
  const [deleteTitle, setDeleteTitle] = useState("");

  const handleDelete = () => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/delete_note.php/?title=${deleteTitle}`
    }).then(response => {
      console.log(response);
    });
  };

  return (
    <React.Fragment>
      <div className="inputHolder">
        <span className="deleteTitle">Delete Note</span>
        <br></br>
        <br></br>
        <input
          className="inputTitle"
          value={deleteTitle}
          onChange={e => setDeleteTitle(e.target.value)}
          placeholder="Title of note you want to delete"
        ></input>
        <button onClick={handleDelete} className="btn btn-secondary submit">
          Submit
        </button>
      </div>
    </React.Fragment>
  );
};

export default CheckDelete;
