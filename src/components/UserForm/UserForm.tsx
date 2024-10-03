import React, { useState } from "react";
import { IUser, IUserMutation } from "../../types";

interface Props {
  addNewUser: (newUser: IUser) => void;
}

const UserForm: React.FC<Props> = ({ addNewUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    role: "user",
    isActive: false,
  });
  const changeUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
  };
  const validMail = (email: string) => {
    const mailRegx = /\./;
    return mailRegx.test(email);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name.trim().length === 0 && newUser.email.trim().length === 0) {
      alert("write text");
    } else if (!validMail(newUser.email)) {
      alert("write email");
    } else {
      addNewUser({
        id: new Date().toISOString(),
        ...newUser,
      });
      setNewUser({
        name: "",
        email: "",
        role: "user",
        isActive: false,
      });
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <h3>Add new user</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          id="name"
          type="text"
          className="form-control"
          required
          value={newUser.name}
          onChange={changeUser}
        ></input>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          required
          value={newUser.email}
          onChange={changeUser}
        ></input>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="role">Role:</label>
        <select
          name="role"
          id="role"
          className="form-control"
          value={newUser.role}
          onChange={changeUser}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="isActive">Active:</label>
        <input
          name="isActive"
          id="isActive"
          type="checkbox"
          className="form-check-input"
          checked={newUser.isActive}
          onChange={changeUser}
        ></input>
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default UserForm;
