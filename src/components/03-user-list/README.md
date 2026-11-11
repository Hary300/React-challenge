# Challenge 03 - User List

**Difficulty:** Easy

## Description

Create a reusable React component called `UserList`.

The component receives an array of users through props
and displays each user's name in a list.

## Requirements

1. Create a functional component named `UserList`.
2. Define a `User` type containing:
   - id: number
   - name: string
3. Accept a `users` array through props.
4. Render each user inside an `<li>` element.
5. Use `.map()` to render the users.
6. Use each user's `id` as the React key.
7. Render the list inside a `<ul>` element.
8. If the array is empty, render an empty list.

## Examples

Input:

<UserList users={[
{ id: 1, name: "Hary" },
{ id: 2, name: "John" }
]} />

Expected output:

<ul>
  <li>Hary</li>
  <li>John</li>
</ul>

## Constraints

- Use TypeScript.
- Use functional components.
- Do not hardcode user data.
- Do not modify the provided tests.

## Concepts Practiced

- Array Props
- TypeScript Types
- Array.map()
- Rendering Lists
- React Keys
- Component Testing

## Completion Criteria

- [ ] All users are rendered.
- [ ] Each user is rendered inside an li element.
- [ ] The list uses ul.
- [ ] Empty arrays are handled correctly.
- [ ] React keys are implemented.
- [ ] All tests pass.
