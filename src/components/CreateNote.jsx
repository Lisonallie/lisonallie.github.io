import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";
import CreateInput from "./CreateInput";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//rfce
const CreateNote = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-success edit" onClick={toggleModal}>
        <FontAwesomeIcon icon={faPlusSquare} /> Create Note
      </button>
      <Modali.Modal {...modal}>
        <div className="forPadding">
          <CreateInput />
        </div>
      </Modali.Modal>
    </React.Fragment>
  );
};

export default CreateNote;