import { useState } from 'react';

interface SelectableInterestsProps {
  interests: string[];
}

const SelectableInterests = ({ interests }: SelectableInterestsProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleClick = (selectedInterest: string) => {
    if (selectedInterests.includes(selectedInterest)) {
      const remainingInterests = selectedInterests.filter(
        (interest) => interest !== selectedInterest
      );
      setSelectedInterests(remainingInterests);
    } else {
      setSelectedInterests((prev) => [...prev, selectedInterest]);
    }
  };
  return (
    <div>
      {interests.map((interest, index) => (
        <button
          key={index}
          onClick={() => handleClick(interest)}
          aria-pressed={selectedInterests.includes(interest)}
          aria-label={interest}
        >
          {interest}
        </button>
      ))}
      <p>Selected interests ({selectedInterests.length})</p>
      <ul aria-label='Selected interests'>
        {selectedInterests.length !== 0
          ? selectedInterests.map((selectedInterest, index) => (
              <li key={index}>{selectedInterest}</li>
            ))
          : 'No interests selected.'}
      </ul>
    </div>
  );
};

export default SelectableInterests;
