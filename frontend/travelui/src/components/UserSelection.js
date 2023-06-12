import { useState, useEffect } from "react";
import { variables } from "../Variables";
import styles from "../styles/UserSelection.module.css";

export default function UserSelection() {
  const [users, setUsers] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [selected, setSelected] = useState([]);

  function handleSelected(i, id) {
    if (selected.find((e) => e === id)) {
      const newSelected = selected.filter((e) => e !== id);
      setSelected(newSelected);
    } else {
      const newSelected = [...selected, id];
      setSelected(newSelected);
    }

    const updatedCheckedState = checkedState.map((item, index) =>
      index === i ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

  function handleSubmit() {
    const sendData = selected.map((id) => users.find((e) => e.UsersId === id));
    // console.log(selected);
    console.log(sendData);
    setCheckedState(new Array(users.length).fill(false));
  }

  async function fetchUsers() {
    const response = await fetch(variables.API_URL + "users");
    const json = await response.json();
    // console.log(json);
    setUsers(json);
    setCheckedState(new Array(json.length).fill(false));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h3>UserSelection</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>UsersId</th>
            <th>Users Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.UsersId}>
              <td>{user.UsersId}</td>
              <td>{user.Name}</td>
              <td>{user.Address}</td>
              <td>{user.PhoneNumber}</td>
              <td>
                <input
                  type="checkbox"
                  id={user.UsersId}
                  checked={checkedState[index]}
                  onChange={() => handleSelected(index, user.UsersId)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
}
