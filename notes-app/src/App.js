import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Notes.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/'
import axios from 'axios';


function App() {
  componentDidMount() {
    axios.get('http://localhost:4567/becode-database-api/list_note.php')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
   

  return (
    <div>
      <p>

      </p>
    </div>
  );
}

export default App;
