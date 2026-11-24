# Shopping Cart Summary

## Objective

Build a shopping cart summary component commonly used in e-commerce checkout pages.

The component receives an array of cart items and calculates:

- Total number of products.
- Subtotal of all products.
- Shipping cost.
- Grand total.

## Props

### CartItem

- `id: string` — Unique product identifier.
- `name: string` — Product name.
- `price: number` — Price per item.
- `quantity: number` — Quantity of the product.

### ShoppingCartSummaryProps

- `items: CartItem[]` — List of products in the cart.
- `shippingCost: number` — Shipping cost.

Example:

```tsx
<ShoppingCartSummary
  items={[
    {
      id: 'product-001',
      name: 'Wireless Mouse',
      price: 150000,
      quantity: 2,
    },
    {
      id: 'product-002',
      name: 'Mechanical Keyboard',
      price: 250000,
      quantity: 1,
    },
  ]}
  shippingCost={15000}
/>
```

---

## Step-by-Step Instructions

### Step 1: Understand the Input Data

The component receives an array of objects.

Each object represents one product in the shopping cart.

Example:

- Wireless Mouse: 150000 × 2.
- Mechanical Keyboard: 250000 × 1.

**Your task:** Understand the structure of the array and identify the values needed for the calculations.

### Step 2: Define the TypeScript Interfaces

Create:

1. `CartItem`
2. `ShoppingCartSummaryProps`

Make sure `items` is an array of `CartItem` objects.

**Your task:** Define the interfaces and component props.

### Step 3: Render the Product List

Display each product with:

- Product name.
- Quantity.
- Price multiplied by quantity.

Example:

`Wireless Mouse × 2 — 300000`

Use the product ID as the React key.

**Your task:** Render the array using `.map()`.

### Step 4: Calculate Total Items

Calculate the total quantity of all products.

Example:

- Wireless Mouse: 2.
- Mechanical Keyboard: 1.
- USB Hub: 3.

Total items = 6.

Important: Count the quantities, not the number of product types.

**Your task:** Use an appropriate array method to calculate the total quantity.

### Step 5: Calculate Subtotal

For each product:

`item subtotal = price × quantity`

Then add all item subtotals.

Example:

- Wireless Mouse: 150000 × 2 = 300000.
- Mechanical Keyboard: 250000 × 1 = 250000.
- USB Hub: 50000 × 3 = 150000.

Subtotal = 700000.

**Your task:** Calculate the total subtotal using the array data.

### Step 6: Calculate Grand Total

The grand total includes the subtotal and shipping cost.

`grand total = subtotal + shippingCost`

Example:

- Subtotal: 700000.
- Shipping: 15000.
- Grand total: 715000.

**Your task:** Calculate the grand total.

### Step 7: Handle Empty Cart

What should happen when the cart contains no products?

Requirements:

- Display `Your cart is empty.`
- Total items must be 0.
- Subtotal must be 0.
- Grand total must equal shipping cost.

**Your task:** Handle the empty array without causing errors.

### Step 8: Handle Different Data

Test the component with:

- One product.
- Multiple products.
- Products with quantity greater than 1.
- Products with different prices.
- An empty array.
- Zero shipping cost.

**Your task:** Make sure every calculation uses the current props.

### Step 9: Avoid Unnecessary State

All values in this component can be calculated from props.

You do not need React state for:

- Total items.
- Subtotal.
- Grand total.

These are derived values.

**Your task:** Calculate them directly during rendering or with `useMemo` if appropriate. For this challenge, direct calculations are sufficient.

---

## Acceptance Criteria

- [ ] Product list is displayed correctly.
- [ ] Each product displays its correct subtotal.
- [ ] Total items counts all product quantities.
- [ ] Subtotal is calculated correctly.
- [ ] Shipping cost is displayed correctly.
- [ ] Grand total is calculated correctly.
- [ ] Empty cart is handled correctly.
- [ ] Zero shipping cost is supported.
- [ ] Product IDs are used as React keys.
- [ ] No unnecessary React state is used.
- [ ] All tests pass.

## Bonus Challenges

- Add a discount prop.
- Calculate the final total after discount.
- Display a free shipping message when shipping cost is zero.
- Format prices using `Intl.NumberFormat`.

## Important

Do not copy a complete solution.

Try to solve each step independently. If you get stuck, ask for help with the specific step you are working on.
