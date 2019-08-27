import React, { useState, useEffect } from 'react';
//imrc
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from 'modali';

//rfce
const EditData = () => {
    const [modal, toggleModal] = useModali();

    useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:4567/becode-database-api/update_note.php/`
      // ?text=${text}&newtext=${newText}
    }).then(response => {
      console.log("hello" + response);
      
    });
  }, []);

    return (
        <div></div>
    )
}

export default EditData;
