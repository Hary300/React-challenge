import { useState } from 'react';

type FilterType = 'all' | 'completed' | 'active';

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 1,
    title: 'Learn React',
    isCompleted: true,
  },
  { id: 2, title: 'Practice TypeScript', isCompleted: false },
  { id: 3, title: 'Build a Project', isCompleted: false },
];

const TodoFilter = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>('all');

  const handleFilter = (filter: FilterType) => {
    setFilter(filter);
  };

  const handleChange = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const filteredTodos =
    filter === 'all'
      ? todos
      : todos.filter((todo) =>
          filter === 'active'
            ? todo.isCompleted === false
            : todo.isCompleted === true
        );

  return (
    <div>
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
      <button onClick={() => handleFilter('active')}>Active</button>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              id={`${todo.id}-${todo.title}`}
              checked={todo.isCompleted}
              onChange={() => handleChange(todo.id)}
            />
            <label htmlFor={`${todo.id}-${todo.title}`}>{todo.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoFilter;
