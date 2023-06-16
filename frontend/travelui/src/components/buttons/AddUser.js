import { useState, useEffect } from "react";
import { variables } from "../../Variables";
import styles from "../../styles/AddUser.module.css";

export default function AddUser(props) {
  const target = "addCar".concat("Modal");
  const label = target + "label";
  const buttonName = "Add Users";
  const title = "Add Users";
  const submitButton = "Save changes";
  const submitFcn = props.fcn;

  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  function handleSelected(i, user) {
    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === i) {
        if (!item) {
          // turning true
          // add to selected
          const newSelected = [...selected, user];
          setSelected(newSelected);
        } else {
          // turning false
          // remove from selected
          const newSelected = selected.filter((e) => e.id !== user.id);
          setSelected(newSelected);
        }
      }
      return index === i ? !item : item;
    });
    setCheckedState(updatedCheckedState);
  }

  function handleSubmit() {
    submitFcn(selected);
    setSelected([]);
    setCheckedState(new Array(checkedState.length).fill(false));
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(variables.API_URL + "users");
      const json = await response.json();
      setUsers(json);
      setCheckedState(new Array(json.length).fill(false));
    }

    fetchUsers();
  }, []);

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
        <div className="modal-dialog modal-dialog-scrollable">
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
              <div style={styles.container}>
                <h3>UserSelection</h3>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Users Name</th>
                      <th>Phone Number</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.UserId}>
                        <td>{user.Name}</td>
                        <td>{user.PhoneNumber}</td>
                        <td>
                          <input
                            type="checkbox"
                            id={user.UserId}
                            checked={checkedState[index]}
                            onChange={() => handleSelected(index, user)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                onClick={handleSubmit}
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
