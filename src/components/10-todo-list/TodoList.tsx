import { useState, type ChangeEvent } from 'react';

interface Todo {
  id: number;
  title: string;
}

const initialTodos = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Practice TypeScript' },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [textInput, setTextInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInputText = e.target.value;
    setTextInput(userInputText);
  };

  const handleAddTodo = () => {
    if (!textInput.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100), title: textInput },
    ]);
    setTextInput('');
  };
  return (
    <div>
      <input type='text' value={textInput} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
