import React from "react";

function ModalComponent(props) {
  const { id, formField } = props;

  const generateForm = formField.map((v, i) => {
    const {type, label, opt} = v
    return (
      <fieldset className="fieldset m-2">
        <legend className="fieldset-legend">{label}</legend>
        <input type={type} placeholder={label} className="input" />
        <p className="label">{opt?"Optional":"Required"}</p>
      </fieldset>
    );
  });

  return (
    <>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
            {generateForm}
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
