# Challenge 19 - Dynamic Tag Input

## Difficulty

Easy

## Description

Create a Dynamic Tag Input component that allows users to add and remove tags.

Users should be able to enter a tag in an input field and add it by clicking an Add button or pressing the Enter key.

Each tag should have a remove button.

## Requirements

1. Display an input field for entering a tag.
2. Display an Add button.
3. Allow users to add a tag by clicking the Add button.
4. Allow users to add a tag by pressing Enter.
5. Display all added tags.
6. Allow users to remove individual tags.
7. Clear the input field after successfully adding a tag.
8. Prevent empty or whitespace-only tags.
9. Prevent duplicate tags (case-insensitive).
10. Display a message when there are no tags.

## Props

This component does not require any props.

## Example Usage

```tsx
<DynamicTagInput />
```

## Expected Behavior

Initially:

- The input field is empty.
- No tags are displayed.
- Display: "No tags added."

After entering "React" and clicking Add:

- Display the tag "React".
- Clear the input field.

After entering "TypeScript" and pressing Enter:

- Display both "React" and "TypeScript".

After removing "React":

- Only "TypeScript" should remain.

If the user enters an empty value:

- Do not add a tag.

If the user enters "react" when "React" already exists:

- Do not add a duplicate tag.

## Bonus (Optional)

- Display the total number of tags.
- Limit the maximum number of tags to 5.
- Disable the Add button when the input is empty.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage the input value and tags.
- Use immutable state updates.
- Do not use external libraries.

Good luck!
