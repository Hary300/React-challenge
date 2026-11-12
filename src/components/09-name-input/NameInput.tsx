import { useState, type ChangeEvent } from 'react';

const NameInput = () => {
  const [name, setName] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setName(userInput);
  };
  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
      <h1>{name ? `Hello, ${name}!` : ''}</h1>
    </div>
  );
};

export default NameInput;
