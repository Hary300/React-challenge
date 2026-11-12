# Challenge 07 - Product Card

**Difficulty:** Easy

## Description

Create a reusable React component called `ProductCard`.

The component receives a product object through props
and displays its information.

It should also display the product availability status.

## Requirements

1. Create a functional component named `ProductCard`.
2. Define a `Product` type containing:
   - `id`: number
   - `name`: string
   - `price`: number
   - `inStock`: boolean
3. Accept a `product` object through props.
4. Display the product name inside an `<h2>` element.
5. Display the product price using Indonesian Rupiah formatting.
6. If `inStock` is true, display "In Stock".
7. If `inStock` is false, display "Out of Stock".
8. Apply the CSS class `in-stock` when available.
9. Apply the CSS class `out-of-stock` when unavailable.

## Examples

Input:

<ProductCard
product={{
    id: 1,
    name: "Mechanical Keyboard",
    price: 750000,
    inStock: true
  }}
/>

Expected output:

- Mechanical Keyboard
- Rp750.000
- In Stock

## Constraints

- Use TypeScript.
- Use functional components.
- Use Intl.NumberFormat for currency formatting.
- Do not hardcode product information.
- Do not modify the provided tests.

## Concepts Practiced

- Object Props
- TypeScript Types
- Conditional Rendering
- Intl.NumberFormat
- Boolean Conditions
- Dynamic CSS Classes
- Component Testing

## Completion Criteria

- [ ] Product name renders correctly.
- [ ] Product price uses Indonesian Rupiah formatting.
- [ ] In Stock status works.
- [ ] Out of Stock status works.
- [ ] Correct CSS classes are applied.
- [ ] All tests pass.
