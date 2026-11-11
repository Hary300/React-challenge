# Challenge 06 - Action Button

**Difficulty:** Easy

## Description

Create a reusable React component called `ActionButton`.

The component displays a button with a custom label
and executes a callback when clicked.

## Requirements

1. Create a functional component named `ActionButton`.
2. Accept the following props:
   - `label` (required string)
   - `onClick` (required function)
   - `disabled` (optional boolean)
3. Render a native HTML `<button>`.
4. Display the label inside the button.
5. Execute the onClick callback when clicked.
6. Support the disabled state.
7. The button must not execute onClick when disabled.

## Examples

Input:

<ActionButton
  label="Submit"
  onClick={handleSubmit}
/>

Expected behavior:

- Display a button with "Submit".
- Execute handleSubmit when clicked.

Input:

<ActionButton
  label="Submit"
  onClick={handleSubmit}
  disabled={true}
/>

Expected behavior:

- Display a disabled button.
- Do not execute handleSubmit when clicked.

## Constraints

- Use TypeScript.
- Use functional components.
- Use native HTML button.
- Do not hardcode the label.
- Do not modify the provided tests.

## Concepts Practiced

- Function Props
- Event Handling
- onClick
- TypeScript Function Types
- Boolean Props
- Disabled State
- Component Testing

## Completion Criteria

- [ ] Button renders correctly.
- [ ] Custom label works.
- [ ] onClick executes when clicked.
- [ ] Multiple clicks execute the callback correctly.
- [ ] Disabled state works.
- [ ] All tests pass.
