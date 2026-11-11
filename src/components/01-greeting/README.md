# Challenge 01 - Greeting Component

**Difficulty:** Easy

## Description

Create a reusable React component called `Greeting`.

The component should receive a name through props and display
a personalized greeting message.

## Requirements

1. Create a functional React component named `Greeting`.
2. The component must accept a `name` prop.
3. Define the props type using TypeScript.
4. Display the greeting inside an `<h1>` element.
5. The greeting format must be:

   Hello, [name]!

## Examples

Input:
<Greeting name="Hary" />

Expected output:

<h1>Hello, Hary!</h1>

Input:
<Greeting name="John" />

Expected output:

<h1>Hello, John!</h1>

## Constraints

- Use TypeScript.
- Use functional components.
- Do not hardcode the name.
- Do not modify the provided tests.

## Concepts Practiced

- React Functional Components
- Props
- TypeScript Types
- JSX
- Component Testing

## Completion Criteria

- [ ] Component renders correctly.
- [ ] Props work correctly.
- [ ] All tests pass.
- [ ] Code is clean and readable.
