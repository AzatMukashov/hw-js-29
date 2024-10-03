import UserForm from "./components/UserForm/UserForm.tsx";
import Users from "./components/Users/Users.tsx";
import { useState } from "react";
import { IUser } from "./types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "1",
      name: "Nate",
      email: "email1@email.com",
      isActive: false,
      role: "admin",
    },
    {
      id: "2",
      name: "Naten",
      email: "email2@email.com",
      isActive: true,
      role: "user",
    },
    {
      id: "3",
      name: "Naty",
      email: "email3@email.com",
      isActive: false,
      role: "editor",
    },
  ]);
  const addNewUser = (newUser: IUser) => {
    setUsers((prevState) => [newUser, ...prevState]);
  };
  return (
    <>
      <main className="container-fluid mt-4">
        <div className="row">
          <div className="col-3 mb-2">
            <UserForm addNewUser={addNewUser} />
          </div>

          <div className="col-3 mb-2">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
