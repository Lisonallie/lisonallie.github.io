import React, { useState, useEffect } from 'react';
//imrc
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

//rfce
const EditData = () => {
    // const [editNote, setEditNote] = useState("");

    useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/update_note.php/?text=${text}&newtext=${newtext}`
    }).then(response => {
      console.log(response);
      
    });
  }, []);

  const handleEditClick = () => {

  }

    return (
        <div>
            
        </div>
    )
}

export default EditData;
