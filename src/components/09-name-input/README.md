# Challenge 09 - Name Input

**Difficulty:** Easy

## Description

Create a React component called `NameInput`.

The component allows users to enter their name
and displays a personalized greeting based on the input.

## Requirements

1. Create a functional component named `NameInput`.
2. Use `useState` to manage the input value.
3. Render a text input.
4. The initial input value must be an empty string.
5. Update the state whenever the user types.
6. Display a greeting using this format:

   Hello, [name]!

7. Only display the greeting when the input is not empty.
8. Update the greeting immediately when the input changes.

## Expected Behavior

Initial state:

- Input: ""
- Greeting: Not displayed

After typing "Hary":

- Input: "Hary"
- Greeting: "Hello, Hary!"

After changing the input to "John":

- Input: "John"
- Greeting: "Hello, John!"

## Constraints

- Use TypeScript.
- Use functional components.
- Use React useState.
- Use a controlled input.
- Do not manipulate the DOM directly.
- Do not modify the provided tests.

## Concepts Practiced

- React useState
- Controlled Components
- Input Events
- onChange
- Conditional Rendering
- Dynamic Rendering
- Component Testing

## Completion Criteria

- [ ] Input renders correctly.
- [ ] Initial value is empty.
- [ ] Input value updates correctly.
- [ ] Greeting displays correctly.
- [ ] Greeting updates when the input changes.
- [ ] Greeting disappears when the input is empty.
- [ ] All tests pass.
