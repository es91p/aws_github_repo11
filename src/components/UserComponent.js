import React from "react";

import UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users1: [],
    };
  }

  state = {};

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users1: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">User Class Component</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Id</th>
              <th>User First Name</th>
              <th>User Last Name </th>
              <th>User EmailId</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users1.map((usr) => (
              <tr key={usr.id}>
                <td>{usr.id}</td>
                <td>{usr.firstName}</td>
                <td>{usr.lastName}</td>
                <td>{usr.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserComponent;
