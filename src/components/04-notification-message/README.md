# Challenge 04 - Notification Message

**Difficulty:** Easy

## Description

Create a reusable React component called `NotificationMessage`.

The component displays a notification message based on
its notification type.

## Requirements

1. Create a functional component named `NotificationMessage`.
2. Accept two props:
   - `type`
   - `message`
3. The `type` prop must accept only:
   - "success"
   - "error"
   - "warning"
4. Display the message inside a `<div>` element.
5. Use `role="alert"` on the div.
6. Apply the notification type as its CSS class.

## Examples

Input:

<NotificationMessage
  type="success"
  message="Data saved successfully"
/>

Expected output:

<div role="alert" class="success">
  Data saved successfully
</div>

Input:

<NotificationMessage
  type="error"
  message="Something went wrong"
/>

Expected output:

<div role="alert" class="error">
  Something went wrong
</div>

## Constraints

- Use TypeScript.
- Use functional components.
- Use a union type for the notification type.
- Do not hardcode the message.
- Do not modify the provided tests.

## Concepts Practiced

- Props
- Union Types
- Conditional Rendering
- Dynamic CSS Classes
- Accessibility (ARIA)
- Component Testing

## Completion Criteria

- [ ] Success notification works.
- [ ] Error notification works.
- [ ] Warning notification works.
- [ ] Correct CSS class is applied.
- [ ] All tests pass.
