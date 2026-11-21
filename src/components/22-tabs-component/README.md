# Challenge 22 - Tabs Component

## Difficulty

Easy

## Description

Create a reusable Tabs component that allows users to switch between different content panels by clicking tab buttons.

Only one tab should be active at a time.

The component should display the content associated with the currently active tab.

## Requirements

1. Accept a `tabs` prop containing an array of tab objects.
2. Each tab object must have an `id`, `label`, and `content`.
3. Display all tab labels as buttons.
4. The first tab should be active by default.
5. Display only the content of the active tab.
6. Clicking a tab should make it active.
7. Update the displayed content whenever the active tab changes.
8. Only one tab can be active at a time.
9. Use appropriate accessibility attributes.

## Props

| Prop | Type      | Required |
| ---- | --------- | -------- |
| tabs | TabItem[] | Yes      |

## TabItem Type

```ts
type TabItem = {
  id: string;
  label: string;
  content: string;
};
```

## Example Usage

```tsx
<Tabs
  tabs={[
    {
      id: 'profile',
      label: 'Profile',
      content: 'This is the profile content.',
    },
    {
      id: 'settings',
      label: 'Settings',
      content: 'This is the settings content.',
    },
    {
      id: 'activity',
      label: 'Activity',
      content: 'This is the activity content.',
    },
  ]}
/>
```

## Expected Behavior

Initially:

- All tab buttons are visible.
- The first tab is active.
- Only the first tab's content is displayed.

After clicking Settings:

- Settings becomes active.
- Profile becomes inactive.
- Settings content is displayed.
- Profile content is hidden.

After clicking Activity:

- Activity becomes active.
- Only Activity content is displayed.

## Bonus (Optional)

- Add keyboard navigation using ArrowLeft and ArrowRight.
- Add a visual indicator for the active tab.
- Handle an empty tabs array gracefully.

## Rules

- Use React functional components.
- Use TypeScript.
- Use useState to manage the active tab.
- Do not use external libraries.
- Use semantic HTML and accessibility attributes.

Good luck!
