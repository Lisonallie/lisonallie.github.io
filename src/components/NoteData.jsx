import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const NoteData = () => {
  const [titles, setTitles] = useState([]);
  const [open, setOpen] = useState(true);

  // titles = SHOW titles & setTitles = GET titles/give value to first titles declaration
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      setTitles(response.data[0]);
    });
  }, []);
  //^^^^^add the array there to stop the response.data from repeating WAY TOO MANY TIMES

  const buttons =
  <React.Fragment>
    <button className="btn btn-info">
      Edit
    </button>
    <button className="btn btn-danger">
      Delete
    </button>
  </React.Fragment>

  let openNote = () => {
    setOpen(open => !open);

  };

  const listNotes = titles.map(note => (
    <li className="noteTitles" key={note.title}>
      {open ? note.title : note.text_entry}
      {buttons}
    </li>
  ));

  return (
    <div>
      <ul onClick={openNote} className="titlesList">
        {listNotes}
      </ul>
    </div>
  );
};

export default NoteData;
