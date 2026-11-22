import { useState } from 'react';

interface StarRatingProps {
  maxRating: number;
}

const StarRating = ({ maxRating }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [selectedStarIndex, setSelectedStarIndex] = useState<number | null>(
    null
  );

  const handleStarClick = (starIndex: number) => {
    setSelectedStarIndex(starIndex);
    setRating(starIndex + 1);
  };

  return (
    <div>
      {Array.from({ length: maxRating }).map((_, index) => {
        const isSelected = !selectedStarIndex
          ? false
          : index <= selectedStarIndex;
        return (
          <button
            key={index}
            onClick={() => handleStarClick(index)}
            aria-pressed={isSelected}
          >
            Rate {index + 1} out of {maxRating}
          </button>
        );
      })}
      {rating === 0 ? (
        <p>No rating selected.</p>
      ) : (
        <p>
          Your rating: {rating} / {maxRating}
        </p>
      )}
    </div>
  );
};

export default StarRating;
