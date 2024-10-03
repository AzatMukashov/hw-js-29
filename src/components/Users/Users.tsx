import UserItem from "./UserItem.tsx";
import * as React from "react";
import { IUser } from "../../types";

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    users && (
      <>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </>
    )
  );
};

export default Users;
