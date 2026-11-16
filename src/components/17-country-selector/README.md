# Challenge 17 - Country Selector

## Difficulty

Easy

## Description

Create a Country Selector component that allows users to select a country from a dropdown menu.

After selecting a country, the component should display the selected country's name and code.

## Requirements

1. Accept a `countries` prop containing an array of country objects.
2. Each country object must have an `id`, `name`, and `code`.
3. Display all countries inside a select element.
4. Use a placeholder option: "Select a country".
5. Store the selected country ID using React state.
6. Display the selected country's name and code.
7. Display a message when no country is selected.
8. The dropdown must be a controlled component.

## Props

| Prop      | Type      | Required |
| --------- | --------- | -------- |
| countries | Country[] | Yes      |

## Country Type

```ts
type Country = {
  id: string;
  name: string;
  code: string;
};
```

## Example Usage

```tsx
<CountrySelector
  countries={[
    { id: 'id', name: 'Indonesia', code: '+62' },
    { id: 'us', name: 'United States', code: '+1' },
    { id: 'jp', name: 'Japan', code: '+81' },
  ]}
/>
```

## Expected Behavior

Initially:

- The dropdown displays "Select a country".
- Display: "No country selected."

After selecting Indonesia:

- The dropdown displays Indonesia.
- Display the selected country:
  - Name: Indonesia
  - Code: +62

After selecting another country:

- The displayed country information should update.

## Bonus (Optional)

- Display the selected country's information inside a separate card.
- Display the total number of available countries.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage the selected country.
- Use immutable state principles.
- Do not use external libraries.

Good luck!
