import React from "react";

function ModalComponent(props) {
  const { id, formField, title } = props;

  return (
    <>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {formField}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Create</button>
              <button className="btn ml-2">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalComponent;
