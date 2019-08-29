import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";
import Input from "./Input";
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//rfce
const EditData = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-info edit" onClick={toggleModal}>
      <FontAwesomeIcon icon={faPencilAlt} /> Edit
      </button>
      <Modali.Modal {...modal}>
        <div className="forPadding">
          <Input />
        </div>
      </Modali.Modal>
    </React.Fragment>
  );
};

export default EditData;
