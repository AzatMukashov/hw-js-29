import React, { useState } from 'react';
import { IDish, IDishMutation } from '../../types';

interface Props {
  addNewDish: (newDish: IDish) => void;
}

const DishFrom: React.FC<Props> = ({addNewDish}) => {
  const [newDish, setNewDish] = useState<IDishMutation>({
    name: '',
    description: '',
    urlImage: '',
    price: 0,
  });
  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewDish(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDish.name.trim().length === 0 && newDish.description.trim().length === 0) {
      alert('write text');
    } else {
      addNewDish({
        id: new Date().toISOString(),
        ...newDish,
        price: Number(newDish.price)
      });
      setNewDish({
        name: '',
        description: '',
        urlImage: '',
        price: 0,
      });
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <h3>Add new ...</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
        <input name="name"
               id="name"
               type="text"
               className="form-control"
               required
               value={newDish.name}
               onChange={changeDish}
        ></input>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="description">Description:</label>
        <textarea name="description"
                  id="description"
                  className="form-control"
                  required
                  value={newDish.description}
                  onChange={changeDish}
        ></textarea>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="urlImage">Url image:</label>
        <input name="urlImage"
               id="urlImage"
               type="url"
               className="form-control"
               value={newDish.urlImage}
               onChange={changeDish}
        ></input>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="price">Price:</label>
        <input name="price"
               id="price"
               type="number"
               className="form-control"
               min={1}
               required
               value={newDish.price}
               onChange={changeDish}
        ></input>
      </div>
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default DishFrom;