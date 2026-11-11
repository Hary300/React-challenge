# Challenge 05 - User Profile Card

**Difficulty:** Easy

## Description

Create a reusable React component called `UserProfileCard`.

The component displays a user's basic profile information.

Some props are optional and should have default values.

## Requirements

1. Create a functional component named `UserProfileCard`.
2. Accept the following props:
   - `name` (required string)
   - `role` (optional string)
   - `avatar` (optional string)
3. Display the name inside an `<h2>` element.
4. Display the role inside a `<p>` element.
5. Use "Guest" as the default role.
6. Display the avatar inside an `<img>` element.
7. Use "/default-avatar.png" as the default avatar.

## Examples

Input:

<UserProfileCard name="Hary" />

Expected output:

- Name: Hary
- Role: Guest
- Avatar: /default-avatar.png

Input:

<UserProfileCard
  name="Hary"
  role="Frontend Developer"
  avatar="/hary.png"
/>

Expected output:

- Name: Hary
- Role: Frontend Developer
- Avatar: /hary.png

## Constraints

- Use TypeScript.
- Use functional components.
- Use optional props where appropriate.
- Use default values through destructuring.
- Do not modify the provided tests.

## Concepts Practiced

- Optional Props
- Default Values
- Destructuring
- TypeScript
- JSX
- Component Testing

## Completion Criteria

- [ ] Name renders correctly.
- [ ] Custom role renders correctly.
- [ ] Default role works.
- [ ] Custom avatar renders correctly.
- [ ] Default avatar works.
- [ ] All tests pass.
