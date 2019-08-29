import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";
import CheckDelete from "./CheckDelete";
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//rfce
const DeleteData = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-danger delete" onClick={toggleModal}>
        <FontAwesomeIcon icon={faMinusCircle} /> Delete
      </button>
      <Modali.Modal {...modal}>
        <div className="forPadding">
          <CheckDelete />
        </div>
      </Modali.Modal>
    </React.Fragment>
  );
};

export default DeleteData;