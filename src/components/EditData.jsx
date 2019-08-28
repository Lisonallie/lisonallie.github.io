import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";
import Input from "./Input";

//rfce
const EditData = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-info edit" onClick={toggleModal}>
        EDIT
      </button>
      <Modali.Modal {...modal}>
        <div>
          <Input />
        </div>
      </Modali.Modal>
    </React.Fragment>
  );
};

export default EditData;
