import { useState, useEffect } from "react";
import { variables } from "../Variables";
import styles from "../styles/UserSelection.module.css";
import { Link } from "react-router-dom";

export default function UserSelection() {
  const [users, setUsers] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [selected, setSelected] = useState([]);

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

  // function handleSubmit() {
  //   const sendData = selected.map((id) => users.find((e) => e.UserId === id));
  //   // console.log(selected);
  //   console.log(sendData);
  //   setCheckedState(new Array(users.length).fill(false));
  // }

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
            <th>UserId</th>
            <th>Users Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.UserId}>
              <td>{user.UserId}</td>
              <td>{user.Name}</td>
              <td>{user.Address}</td>
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
      <Link to="/carassignment" state={{ selected: selected }}>
        Next
      </Link>
    </div>
  );
}
