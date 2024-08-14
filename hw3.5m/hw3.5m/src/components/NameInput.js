import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addName } from '../redux/actions';

const NameInput = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const names = useSelector((state) => state.names);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addName(name));
      setName('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add name</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameInput;