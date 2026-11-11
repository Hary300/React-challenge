# Challenge 02 - User Status Badge

**Difficulty:** Easy

## Description

Create a reusable React component called `UserStatusBadge`.

The component receives a boolean prop called `isOnline`
and displays the user's current status.

## Requirements

1. Create a functional component named `UserStatusBadge`.
2. Accept an `isOnline` boolean prop.
3. If `isOnline` is true, display "Online".
4. If `isOnline` is false, display "Offline".
5. Apply the CSS class `online` when online.
6. Apply the CSS class `offline` when offline.

## Examples

Input:
<UserStatusBadge isOnline={true} />

Expected output:
<span class="online">Online</span>

Input:
<UserStatusBadge isOnline={false} />

Expected output:
<span class="offline">Offline</span>

## Constraints

- Use TypeScript.
- Use functional components.
- Use conditional rendering.
- Do not hardcode the status.
- Do not modify the provided tests.

## Concepts Practiced

- Boolean Props
- Conditional Rendering
- JSX Expressions
- TypeScript
- CSS Classes
- Component Testing

## Completion Criteria

- [ ] Component renders Online correctly.
- [ ] Component renders Offline correctly.
- [ ] CSS classes are applied correctly.
- [ ] All tests pass.
