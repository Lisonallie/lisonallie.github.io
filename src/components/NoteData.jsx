import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import EditData from "./EditData";
import DeleteData from "./DeleteData";
import CreateNote from "./CreateNote";

const NoteData = () => {
  const [titles, setTitles] = useState([]);
  const [open, setOpen] = useState(false);

  // titles = SHOW titles & setTitles = GET titles/give value to first titles declaration
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      setTitles(response.data[0]);
    });
  });
  //^^^^^add the array there to stop the response.data from repeating WAY TOO MANY TIMES

  let openNote = () => {
    setOpen(open => !open);
  };

  const listNotes = titles.map(note => (
    <React.Fragment>
      <li
        onMouseOver={openNote}
        className="card-body noteTitles m-3"
        key={note.title}
      >
        {open ? note.text_entry : note.title}
      </li>
    </React.Fragment>
  ));

  return (
    <React.Fragment>
      <div className="createEditDelete">
        <CreateNote />
        <div
          className="editDeleteDiv"
          style={{ display: open ? "block" : "none" }}
        >
          <EditData />
          <DeleteData />
        </div>
      </div>
      <div className="card-deck">
        <div id="notesParent" className="card titlesList">
          {listNotes}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteData;
