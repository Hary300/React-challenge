# Challenge 11 - Todo Completion

**Difficulty:** Easy

## Description

Create a React component called `TodoCompletion`.

The component displays a list of todos with checkboxes.
Users can mark individual todos as completed or incomplete.

## Requirements

1. Create a functional component named `TodoCompletion`.
2. Define a `Todo` type containing:
   - `id`: number
   - `title`: string
   - `isCompleted`: boolean
3. Use `useState` to manage the todos.
4. Initialize the list with:
   - Learn React
   - Practice TypeScript
5. Both todos must initially have `isCompleted: false`.
6. Display each todo with a checkbox.
7. Use the todo title as the checkbox label.
8. When a checkbox is checked:
   - Update the corresponding todo's `isCompleted` to true.
   - Apply the CSS class `completed` to its title.
9. When unchecked:
   - Update `isCompleted` to false.
   - Remove the `completed` class.
10. Updating one todo must not affect other todos.

## Expected Behavior

Initial state:

- Learn React: Incomplete
- Practice TypeScript: Incomplete

After checking Learn React:

- Learn React: Completed
- Practice TypeScript: Incomplete

After unchecking Learn React:

- Learn React: Incomplete
- Practice TypeScript: Incomplete

## Constraints

- Use TypeScript.
- Use functional components.
- Use React useState.
- Use immutable state updates.
- Do not manipulate the DOM directly.
- Use a unique ID to identify each todo.
- Do not modify the provided tests.

## Concepts Practiced

- React useState
- Object State
- Array.map()
- Immutable Updates
- Event Handling
- Controlled Checkboxes
- Conditional CSS Classes
- Component Testing

## Completion Criteria

- [ ] All todos render correctly.
- [ ] Checkboxes render correctly.
- [ ] Initial states are unchecked.
- [ ] Checking a todo updates its state.
- [ ] Completed CSS class works correctly.
- [ ] Unchecking a todo works correctly.
- [ ] Only the selected todo is updated.
- [ ] All tests pass.
