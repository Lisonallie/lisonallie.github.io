import React, { useState, useEffect } from "react";
import axios from "axios";
const NoteData = () => {
  // note = SHOW note & setNote = GET note/give value to first note declaration
  const [note, setNote] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      setNote(response.data[0]);
    });
  });
  const listItems = note.map((note) => <li key={note.author}>{[note.author]}</li>);
  
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};
export default NoteData;
