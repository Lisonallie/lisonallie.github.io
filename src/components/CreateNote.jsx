import React from "react";
//imrc
import "bootstrap/dist/css/bootstrap.css";
import Modali, { useModali } from "modali";
import CreateInput from "./CreateInput";

//rfce
const CreateNote = () => {
  const [modal, toggleModal] = useModali();

  return (
    <React.Fragment>
      <button className="btn btn-success edit" onClick={toggleModal}>
        Create Note
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