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

  const buttons = (
    <React.Fragment>
      <button style={{display: open ? 'none' : 'inline' }} className="btn btn-info edit">Edit</button>
      <button style={{display: open ? 'none' : 'inline' }} className="btn btn-danger delete">Delete</button>
    </React.Fragment>
  );
  
  let openNote = () => {
    setOpen(open => !open);
  };

  const listNotes = titles.map(note => (
    <React.Fragment>
      <li className="noteTitles" onClick={openNote} key={note.title}>
        {open ? note.title : note.text_entry}
      </li>
      <div>{buttons}</div>
    </React.Fragment>
  ));

  return (
    <div>
      <ul className="titlesList">
        {listNotes}
      </ul>
    </div>
  );
};

export default NoteData;
