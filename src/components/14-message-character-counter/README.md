# Challenge 14 - Message Character Counter

## Difficulty

Easy

## Description

Create a Message Character Counter component that allows users to type a message inside a textarea while displaying the current character count.

The character count should update automatically whenever the user types or deletes text.

## Requirements

1. Create a textarea where users can type a message.
2. Display the current number of characters.
3. Display the maximum character limit.
4. Update the character count whenever the user types or deletes text.
5. Prevent users from typing more characters than the maximum limit.
6. Accept `maxLength` as a prop.

## Example

If `maxLength` is 100:

- Initially: `0 / 100 characters`
- After typing "Hello": `5 / 100 characters`
- After deleting all text: `0 / 100 characters`

## Props

| Prop      | Type   | Required |
| --------- | ------ | -------- |
| maxLength | number | Yes      |

## Example Usage

```tsx
<MessageCharacterCounter maxLength={100} />
```

## Expected Behavior

- The textarea should be empty initially.
- The character count should start at zero.
- The character count should update immediately.
- Users cannot exceed the maximum character limit.
- Deleting characters should update the count correctly.

## Bonus (Optional)

- Display the remaining characters.
- Show a warning when the user has fewer than 10 characters remaining.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage the message.
- Do not use external libraries.

Good luck!
