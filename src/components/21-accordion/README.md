# Challenge 21 - Accordion

## Difficulty

Easy

## Description

Create an Accordion component that displays a list of questions and answers.

Users should be able to click a question to expand or collapse its answer.

Only one accordion item can be expanded at a time.

## Requirements

1. Accept an `items` prop containing an array of objects.
2. Each item must have an `id`, `question`, and `answer`.
3. Display all questions.
4. Display the answer only when its corresponding question is expanded.
5. Clicking a collapsed question should expand it.
6. Clicking an expanded question should collapse it.
7. Only one item can be expanded at a time.
8. Clicking another question should automatically collapse the previously expanded item.
9. Use semantic HTML and appropriate accessibility attributes.

## Props

| Prop  | Type            | Required |
| ----- | --------------- | -------- |
| items | AccordionItem[] | Yes      |

## AccordionItem Type

```ts
type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};
```

## Example Usage

```tsx
<Accordion
  items={[
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What is TypeScript?',
      answer: 'TypeScript is a typed superset of JavaScript.',
    },
    {
      id: 3,
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript.',
    },
  ]}
/>
```

## Expected Behavior

Initially:

- All questions are visible.
- All answers are hidden.

After clicking the first question:

- The first answer becomes visible.
- Other answers remain hidden.

After clicking the second question:

- The first answer becomes hidden.
- The second answer becomes visible.

After clicking the second question again:

- All answers become hidden.

## Bonus (Optional)

- Add a visual indicator (+ / -) for each accordion item.
- Add a smooth expand/collapse animation.
- Allow multiple items to be expanded simultaneously.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage the expanded item.
- Use immutable state updates.
- Do not use external libraries.

Good luck!
