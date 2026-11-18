import { useState, type ChangeEvent, type KeyboardEvent } from 'react';

interface Tag {
  id: string;
  tagTitle: string;
}

const DynamicTagInput = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [textTagInput, setTextTagInput] = useState('');

  const handleAddClick = () => {
    addTag();
  };

  const handleEnterDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    addTag();
  };

  const addTag = () => {
    const isDuplicateTag = tags.some(
      (tag) => tag.tagTitle.toLowerCase() === textTagInput.toLowerCase()
    );
    if (textTagInput === '' || isDuplicateTag) return;

    setTags((prev) => [
      ...prev,
      { id: crypto.randomUUID(), tagTitle: textTagInput },
    ]);
    setTextTagInput('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const textTagUserInput = e.target.value;
    setTextTagInput(textTagUserInput.trim());
  };

  const handleDelete = (id: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  return (
    <div>
      <input
        type='text'
        name='tag'
        value={textTagInput}
        onChange={handleChange}
        onKeyDown={handleEnterDown}
      />
      <button onClick={handleAddClick}>Add</button>
      {tags.length !== 0 ? (
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <span>{tag.tagTitle}</span>
              <button onClick={() => handleDelete(tag.id)}>
                Remove {tag.tagTitle}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tags added.</p>
      )}
      <p>Total tags: {tags.length}</p>
    </div>
  );
};

export default DynamicTagInput;
