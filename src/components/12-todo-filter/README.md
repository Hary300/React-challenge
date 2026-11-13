# Challenge 12 - Todo Filter

**Difficulty:** Easy

## Description

Create a React component called `TodoFilter`.

The component displays a list of todos and allows users
to filter them based on their completion status.

## Requirements

1. Create a functional component named `TodoFilter`.
2. Define a `Todo` type containing:
   - `id`: number
   - `title`: string
   - `isCompleted`: boolean
3. Define a `FilterType` union type containing:
   - "all"
   - "completed"
   - "active"
4. Use `useState` to manage the selected filter.
5. Initialize the selected filter to "all".
6. Initialize the todo list with:
   - Learn React (completed)
   - Practice TypeScript (active)
   - Build a Project (active)
7. Create three buttons:
   - All
   - Completed
   - Active
8. Display all todos when the selected filter is "all".
9. Display only completed todos when the selected filter is "completed".
10. Display only incomplete todos when the selected filter is "active".
11. Render the filtered todos inside a `<ul>` element.
12. Use `.filter()` to filter the todos.

## Expected Behavior

Default filter (All):

- Learn React
- Practice TypeScript
- Build a Project

Completed filter:

- Learn React

Active filter:

- Practice TypeScript
- Build a Project

## Constraints

- Use TypeScript.
- Use functional components.
- Use React useState.
- Use Array.filter().
- Do not modify the original todos when filtering.
- Do not manipulate the DOM directly.
- Do not modify the provided tests.

## Concepts Practiced

- React useState
- Array.filter()
- Derived State
- Union Types
- Conditional Rendering
- Event Handling
- Component Testing

## Completion Criteria

- [ ] All todos render by default.
- [ ] Completed filter works correctly.
- [ ] Active filter works correctly.
- [ ] All filter restores the complete list.
- [ ] Filtering does not mutate the original array.
- [ ] All tests pass.
