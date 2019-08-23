import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

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
  }, []);
  //^^^^^add the array there to stop the response.data from repeating WAY TOO MANY TIMES

  let key = "";

  let openNote = () => {
    setOpen(open => !open);
    open ? key = "text_entry" : key = "titles";
  };

  console.log(titles);
  
  let listTitles = titles.map(titles => (
    // console.log(titles);
    
    /*return (*/<li className="noteTitles" key={titles.key}>
    {titles.key}
    </li>
  ));
  
  return (
    <div className="noteContainer">
      <ul onClick={openNote} className="titlesList">
        {listTitles}
      </ul>
    </div>
  );

};
export default NoteData;
