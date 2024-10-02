import UserForm from './components/UserForm/UserForm.tsx';
import Users from './components/Users/Users.tsx';
import { useState } from 'react';
import { IUser } from './types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: '1',
      name: 'Nate',
      email: 'A to Z',
      price: 200,
      urlImage: 'https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg'
    },
    {
      id: '2',
      name: 'Nate2',
      email: 'A to Z2',
      price: 2001,
      urlImage: 'https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg'
    },
    {
      id: '3',
      name: 'Nate3',
      email: 'A to Z3',
      price: 2002,
      urlImage: 'https://i.pinimg.com/236x/f6/1b/55/f61b55fbb87da15b4fe32742d1f0c2dc.jpg'
    }
  ]);
  const addNewUser = (newUser: IUser) => {
    setUsers(prevState => [newUser, ...prevState]);
  }
  return (
    <>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <UserForm addNewUser={addNewUser}/>
          </div>

          <div className="col-4 mb-2">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
