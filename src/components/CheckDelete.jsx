import { useState } from "react";
import axios from "axios";
import React from "react";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CheckDelete = () => {
  const [deleteTitle, setDeleteTitle] = useState("");

  const cancelDelete = () => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/delete_note.php/`
    }).then(response => {
      console.log(response);
    });
  };

  const handleDelete = () => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/delete_note.php/?title=${deleteTitle}`
    }).then(response => {
      console.log(response);
    });
  };

  const warning = () => {
    const confirmation = window.confirm("Are you sure you want to delete this note?");
    if (confirmation === true) {
      handleDelete();
    } else {
      cancelDelete();
    }
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
        <br></br>
        <button onClick={warning} className="btn btn-warning submit">
          <FontAwesomeIcon icon={faTrashAlt} /> Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default CheckDelete;
