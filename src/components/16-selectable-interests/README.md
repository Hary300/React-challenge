# Challenge 16 - Selectable Interests

## Difficulty

Easy

## Description

Create a Selectable Interests component that allows users to select and deselect multiple interests from a list of available options.

The component should display all available interests as buttons.

When a user clicks an interest:

- If it is not selected, add it to the selected interests.
- If it is already selected, remove it from the selected interests.

The component should also display the currently selected interests.

## Requirements

1. Accept an `interests` prop containing an array of strings.
2. Display every interest as a button.
3. Allow users to select multiple interests.
4. Allow users to deselect previously selected interests.
5. Display the selected interests.
6. Show a message when no interests are selected.
7. Each interest button should have an appropriate accessible state.

## Props

| Prop      | Type     | Required |
| --------- | -------- | -------- |
| interests | string[] | Yes      |

## Example Usage

```tsx
<SelectableInterests
  interests={['Programming', 'Design', 'Reading', 'Gaming', 'Music']}
/>
```

## Expected Behavior

Initially:

- All interests are displayed.
- No interests are selected.
- Display: "No interests selected."

After selecting "Programming" and "Design":

- Both buttons should indicate that they are selected.
- Display the selected interests:
  - Programming
  - Design

After clicking "Programming" again:

- Programming should be removed from the selected interests.
- Design should remain selected.

## Bonus (Optional)

- Display the total number of selected interests.
- Add a button to clear all selected interests.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage selected interests.
- Use immutable state updates.
- Do not use external libraries.

Good luck!
