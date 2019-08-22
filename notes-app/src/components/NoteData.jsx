import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const NoteData = () => {
  const [title, setTitle] = useState([]);
  // title = SHOW title & setTitle = GET title/give value to first title declaration
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      setTitle(response.data[0]);
    });
  },[])
  //^^^^^add the array there to stop the response.data from repeating WAY TOO MANY TIMES
  const listTitles = title.map(title => (
    <li className="noteTitle" key={title.title}>
      {title.title}
    </li>
  ));

  return (
    <div className="noteContainer">
      <ul className="titleList">{listTitles}</ul>
    </div>
  );
};
export default NoteData;
