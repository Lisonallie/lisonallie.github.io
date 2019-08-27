import React, { useState, useEffect } from 'react';
//imrc
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

//rfce
const EditData = () => {

    useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/update_note.php/`
      // ?text=${text}&newtext=${newText}
    }).then(response => {
      console.log(response);
      
    });
  }, []);

    return (
        <div></div>
    )
}

export default EditData;
