// mainly served as a copy paste template

export default function BSModal(props) {
  // const target = props.target ? props.target : "templateModal";
  // const label = target + "label";
  // const buttonName = props.buttonName ? props.buttonName : "Open Modal";
  // const title = props.title ? props.title : "Title";
  // const submitButton = props.submitButton ? props.submitButton : "Save changes";
  // const submitFcn = props.submitFcn ? props.submitFcn : () => {};

  const target = "template".concat("Modal");
  const label = target + "label";
  const buttonName = "Open Modal";
  const title = "Title";
  const submitButton = "Save changes";
  const submitFcn = () => {};

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
            <div className="modal-body">{props.children}</div>
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
