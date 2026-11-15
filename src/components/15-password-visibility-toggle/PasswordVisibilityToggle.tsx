import { useState } from 'react';

type PasswordVisibilityToggleProps = {
  label: string;
};

const PasswordVisibilityToggle = ({ label }: PasswordVisibilityToggleProps) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown((prev) => !prev);
  };
  return (
    <div>
      <label htmlFor='password'>{label}</label>
      <input
        type={isShown ? 'text' : 'password'}
        name='password'
        id='password'
      />
      <button onClick={handleClick}>
        {isShown ? 'Hide password' : 'Show password'}
      </button>
    </div>
  );
};

export default PasswordVisibilityToggle;
