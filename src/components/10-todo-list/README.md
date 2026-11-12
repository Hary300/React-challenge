# Challenge 10 - Todo List

**Difficulty:** Easy

## Description

Create a React component called `TodoList`.

The component displays a list of tasks and allows users
to add new tasks through an input field.

## Requirements

1. Create a functional component named `TodoList`.
2. Define a `Todo` type containing:
   - `id`: number
   - `title`: string
3. Use `useState` to manage the todo list.
4. Initialize the list with:
   - Learn React
   - Practice TypeScript
5. Display todos inside a `<ul>` element.
6. Render each todo inside an `<li>` element.
7. Use `.map()` to render the todos.
8. Render a controlled text input.
9. Add a button with the label "Add".
10. When the button is clicked:
    - Add the new todo to the list.
    - Clear the input.
11. Do not add empty or whitespace-only todos.
12. Use a unique ID for each new todo.

## Expected Behavior

Initial list:

- Learn React
- Practice TypeScript

After entering "Build a React project" and clicking Add:

- Learn React
- Practice TypeScript
- Build a React project

The input should be empty after adding a todo.

## Constraints

- Use TypeScript.
- Use functional components.
- Use React useState.
- Use immutable state updates.
- Use controlled inputs.
- Do not manipulate the DOM directly.
- Do not modify the provided tests.

## Concepts Practiced

- React useState
- Array State
- Controlled Components
- Event Handling
- Array.map()
- Immutable Updates
- Input Validation
- Component Testing

## Completion Criteria

- [ ] Initial todos render correctly.
- [ ] Todo count is correct.
- [ ] Input works correctly.
- [ ] New todos can be added.
- [ ] Input clears after submission.
- [ ] Empty todos are rejected.
- [ ] Whitespace-only todos are rejected.
- [ ] All tests pass.
