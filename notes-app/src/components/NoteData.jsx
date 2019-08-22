import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const NoteData = () => {
  // note = SHOW note & setNote = GET note/give value to first note declaration
  const [title, setTitle] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      setTitle(response.data[0]);
    });
  });
  const listTitles = title.map((title) => <li className ="noteTitle" key={title.title}>{title.title}</li>);
  
  return (
    <div className ="noteContainer" >
      <ul className ="noteList" >{listTitles}</ul>
    </div>
  );
};
export default NoteData;
