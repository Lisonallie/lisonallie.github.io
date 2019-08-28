import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";

//rfce
const DeleteData = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-danger delete" onClick={toggleModal}>
        Delete
      </button>
      <Modali.Modal {...modal}>
        <div className="forPadding">
          
        </div>
      </Modali.Modal>
    </React.Fragment>
  );
};

export default DeleteData;