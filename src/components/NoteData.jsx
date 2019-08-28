import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import EditData from "./EditData";
import DeleteData from "./DeleteData";

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

  let openNote = () => {
    setOpen(open => !open);
  };

  const listNotes = titles.map(note => (
    <React.Fragment>
      <li className="noteTitles" onMouseOver={openNote} key={note.title}>
        {open ? note.title : note.text_entry}
      </li>
      <div style={{ display: open ? "none" : "inline" }}><EditData/><DeleteData /></div>
    </React.Fragment>
  ));

  return (
    <div>
      <ul className="titlesList">{listNotes}</ul>
    </div>
  );
};

export default NoteData;
