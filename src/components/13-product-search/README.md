# Challenge 13 - Product Search

**Difficulty:** Easy

## Description

Create a React component called `ProductSearch`.

The component displays a list of products and allows users
to search for products by name.

Search results should update immediately as the user types.

## Requirements

1. Create a functional component named `ProductSearch`.
2. Define a `Product` type containing:
   - `id`: number
   - `name`: string
3. Use `useState` to manage the search query.
4. Initialize the search query with an empty string.
5. Initialize the product list with:
   - Mechanical Keyboard
   - Wireless Mouse
   - USB-C Hub
   - Gaming Headset
6. Render a controlled text input.
7. Filter products based on the search query.
8. Search must be case-insensitive.
9. Use `.filter()` and `.includes()` for searching.
10. Display all products when the search query is empty.
11. Display "No products found." when there are no matches.
12. Render matching products inside a `<ul>` element.

## Expected Behavior

Initial state:

- Mechanical Keyboard
- Wireless Mouse
- USB-C Hub
- Gaming Headset

Search query: "keyboard"

Expected result:

- Mechanical Keyboard

Search query: "MOUSE"

Expected result:

- Wireless Mouse

Search query: "laptop"

Expected result:

- No products found.

## Constraints

- Use TypeScript.
- Use functional components.
- Use React useState.
- Use controlled inputs.
- Use Array.filter().
- Use String.includes().
- Use String.toLowerCase().
- Do not modify the original product list.
- Do not modify the provided tests.

## Concepts Practiced

- React useState
- Controlled Components
- Array.filter()
- String.includes()
- String.toLowerCase()
- Derived State
- Conditional Rendering
- Component Testing

## Completion Criteria

- [ ] All products render initially.
- [ ] Search input works correctly.
- [ ] Products are filtered correctly.
- [ ] Search is case-insensitive.
- [ ] Clearing the search restores all products.
- [ ] Empty search results display the correct message.
- [ ] Original product data remains unchanged.
- [ ] All tests pass.
