import React from "react";
import "./App.css";
import "./components/Notes.jsx";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function App() {
  axios({
    method: "get",
    url: "http://localhost:4567/becode-database-api/list_note.php"
  }).then(function(response) {
    // location in the api response where the translation lives.
    console.log(response.data);
  });

  return (
    <div>
      <p />
    </div>
  );
}

export default App;
