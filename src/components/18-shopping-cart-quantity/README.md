# Challenge 18 - Shopping Cart Quantity

## Difficulty

Easy

## Description

Create a Shopping Cart Quantity component that allows users to increase or decrease the quantity of a product.

The component should display the product name, unit price, selected quantity, and total price.

The quantity must never go below 1.

## Requirements

1. Accept the following props:
   - `productName`: string
   - `price`: number
2. The initial quantity must be 1.
3. Display the product name.
4. Display the product price.
5. Create an increment button (+).
6. Create a decrement button (-).
7. Increase the quantity when the increment button is clicked.
8. Decrease the quantity when the decrement button is clicked.
9. Prevent the quantity from going below 1.
10. Calculate and display the total price.
11. Update the total price whenever the quantity changes.

## Props

| Prop        | Type   | Required |
| ----------- | ------ | -------- |
| productName | string | Yes      |
| price       | number | Yes      |

## Example Usage

```tsx
<ShoppingCartQuantity productName='Wireless Mouse' price={150000} />
```

## Expected Behavior

Initially:

- Product: Wireless Mouse
- Unit Price: 150000
- Quantity: 1
- Total Price: 150000

After clicking (+) twice:

- Quantity: 3
- Total Price: 450000

After clicking (-) once:

- Quantity: 2
- Total Price: 300000

The quantity must never be less than 1.

## Bonus (Optional)

- Disable the decrement button when quantity is 1.
- Add a reset button to restore the quantity to 1.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage quantity.
- Calculate the total price from the current quantity and price.
- Do not store the total price in a separate state.
- Do not use external libraries.

Good luck!
