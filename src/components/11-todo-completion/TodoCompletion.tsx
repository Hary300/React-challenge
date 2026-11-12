import { useState } from 'react';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const initialTodo: Todo[] = [
  {
    id: 1,
    title: 'Learn React',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Practice TypeScript',
    isCompleted: false,
  },
];

const TodoCompletion = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodo);
  const handleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type='checkbox'
            id={`${todo.id}-${todo.title}`}
            onChange={() => handleComplete(todo.id)}
          />
          <label
            htmlFor={`${todo.id}-${todo.title}`}
            className={todo.isCompleted ? 'completed' : ''}
          >
            {todo.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoCompletion;
