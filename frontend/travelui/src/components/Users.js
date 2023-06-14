import React, { Component } from "react";
import { variables } from "../Variables";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: [],
      modalTitle: "",
      UsersName: "",
      UsersPhoneNumber: "",
      UserId: 0,
      Longitude: 0.0,
      Latitude: 0.0,
    };
  }

  refreshList() {
    fetch(variables.API_URL + "users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Users: data, UsersWithoutFilter: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeUsersPhoneNumber = (e) => {
    this.setState({ UsersPhoneNumber: e.target.value });
  };

  changeUsersName = (e) => {
    this.setState({ UsersName: e.target.value });
  };

  changeUsersAddress = (e) => {
    this.setState({ UsersAddress: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Users",
      UserId: 0,
      UsersPhoneNumber: "",
      UsersName: "",
      UsersAddress: "",
    });
  }
  editClick(Users) {
    this.setState({
      modalTitle: "Edit Users",
      UserId: Users.UserId,
      UsersPhoneNumber: Users.PhoneNumber,
      UsersName: Users.Name,
      UsersAddress: Users.Address,
      Longitude: Users.Longitude,
      Latitude: Users.Latitude,
    });
  }

  createClick() {
    fetch(variables.API_URL + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PhoneNumber: this.state.UsersPhoneNumber,
        Name: this.state.UsersName,
        Address: this.state.UsersAddress,
        Latitude: 12.34,
        Longitude: 12.34,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  updateClick() {
    fetch(variables.API_URL + "users", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserId: this.state.UserId,
        PhoneNumber: this.state.UsersPhoneNumber,
        Name: this.state.UsersName,
        Address: this.state.UsersAddress,
        Latitude: this.state.Latitude,
        Longitude: this.state.Longitude,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "users/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  render() {
    const {
      Users,
      modalTitle,
      UserId,
      UsersPhoneNumber,
      UsersAddress,
      UsersName,
    } = this.state;
    console.log(Users);
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Users
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Phone Number</th>
              <th>Users Name</th>
              <th>Address</th>
              <th>Date Added</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((Users) => (
              <tr key={Users.UserId}>
                <td>{Users.UserId}</td>
                <td>{Users.PhoneNumber}</td>
                <td>{Users.Name}</td>
                <td>{Users.Address}</td>
                <td>{Users.Date}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(Users)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(Users.UserId)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Users Phone Number</span>
                  <input
                    type="text"
                    className="form-control"
                    value={UsersPhoneNumber}
                    onChange={this.changeUsersPhoneNumber}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Users Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={UsersName}
                    onChange={this.changeUsersName}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Users Address</span>
                  <input
                    type="text"
                    className="form-control"
                    value={UsersAddress}
                    onChange={this.changeUsersAddress}
                  />
                </div>

                {UserId === 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.createClick()}
                  >
                    Create
                  </button>
                ) : null}

                {UserId !== 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
