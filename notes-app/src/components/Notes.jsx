import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class List extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      this.setState({ notes: response.data });
      console.log(response);
      console.log(response.data);

      
    });
  }

  render() {
    return <p> {this.state.notes} </p>;
  }
}

export default List;
