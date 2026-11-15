import { useState, type ChangeEvent } from 'react';

interface MessageCharacterCounterProps {
  maxLength: number;
}
const MessageCharacterCounter = ({
  maxLength,
}: MessageCharacterCounterProps) => {
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const numberOfChar = e.target.value.length;
    setCharCount(numberOfChar);
  };
  return (
    <div>
      <textarea
        name='message'
        id='message'
        rows={5}
        maxLength={maxLength}
        onChange={handleChange}
      ></textarea>
      <p>
        {charCount} / {maxLength} characters
      </p>
    </div>
  );
};

export default MessageCharacterCounter;
