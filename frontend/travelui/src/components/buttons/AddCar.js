import { useState } from "react";

// This button is used in CarAssignment
export default function AddCar(props) {
  const [carName, setCarName] = useState("");

  const changeCarName = (e) => {
    setCarName(e.target.value);
  };

  const target = "AddCar".concat("Modal");
  const label = target + "label";
  const buttonName = "Add Car";
  const title = "Add Car";
  const submitButton = "Save changes";
  const submitFcn = () => {
    props.fcn(carName);
    setCarName("");
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={"#" + target}
      >
        {buttonName}
      </button>

      <div
        className="modal fade"
        id={target}
        tabIndex="-1"
        aria-labelledby={label}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={label}>
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text">Driver's Name</span>
                <input
                  type="text"
                  className="form-control"
                  onChange={changeCarName}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={submitFcn}
              >
                {submitButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
