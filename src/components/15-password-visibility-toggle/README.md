# Challenge 15 - Password Visibility Toggle

## Difficulty

Easy

## Description

Create a Password Visibility Toggle component that allows users to show or hide their password by clicking a button.

By default, the password should be hidden.

When the user clicks the toggle button:

- Hidden password becomes visible.
- Visible password becomes hidden.

## Requirements

1. Create an input field for entering a password.
2. The password should be hidden initially.
3. Create a button to toggle password visibility.
4. Change the input type between `password` and `text`.
5. Update the button label based on the current visibility state.
6. Accept `label` as a prop.

## Props

| Prop  | Type   | Required |
| ----- | ------ | -------- |
| label | string | Yes      |

## Example Usage

```tsx
<PasswordVisibilityToggle label='Password' />
```

## Expected Behavior

Initially:

- Input type: `password`
- Button text: `Show password`

After clicking:

- Input type: `text`
- Button text: `Hide password`

After clicking again:

- Input type: `password`
- Button text: `Show password`

## Bonus (Optional)

- Add an accessible label to the toggle button.
- Preserve the password value when toggling visibility.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage visibility.
- Do not use external libraries.

Good luck!
