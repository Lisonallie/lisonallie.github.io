import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";
import CreateInput from "./CreateInput";

//rfce
const EditData = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-info edit" onClick={toggleModal}>
        Create Note
      </button>
      <Modali.Modal {...modal}>
        <div className="forPadding">
          <Input />
        </div>
      </Modali.Mo