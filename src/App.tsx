import DishFrom from './components/DishFrom/DishFrom.tsx';
import Dishes from './components/Dishes/Dishes.tsx';
import { useState } from 'react';
import { IDish } from './types';

const App = () => {
  const [dishes, setDishes] = useState<IDish[]>([
    {
      id: '1',
      name: 'Nate',
      description: 'A to Z',
      price: 200,
      urlImage: 'https://i.pinimg.com/236x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg'
    },
    {
      id: '2',
      name: 'Nate2',
      description: 'A to Z2',
      price: 2001,
      urlImage: 'https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg'
    },
    {
      id: '3',
      name: 'Nate3',
      description: 'A to Z3',
      price: 2002,
      urlImage: 'https://i.pinimg.com/236x/f6/1b/55/f61b55fbb87da15b4fe32742d1f0c2dc.jpg'
    }
  ]);
  const addNewDish = (newDish: IDish) => {
    setDishes(prevState => [newDish, ...prevState]);
  }
  return (
    <>
      <main className="container mt-4">
        <div className="row">
          <div className="col-4 mb-2">
            <DishFrom addNewDish={addNewDish}/>
          </div>

          <div className="col-4 mb-2">
            <Dishes dishes={dishes}/>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;
