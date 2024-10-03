import { IUser } from '../../types';
import * as React from 'react';

interface Props {
  user: IUser;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-3 p-4">
      <div className="row">
        <div className="col-12">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.email}</p>
          <p className="card-text">{user.role}</p>
          <p className="card-text">Active: {user.isActive ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
