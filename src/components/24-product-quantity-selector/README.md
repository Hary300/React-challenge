# Product Quantity Selector

## Difficulty

Medium

## Objective

Build an interactive product quantity selector commonly used in e-commerce applications.

Users should be able to increase or decrease the quantity of a product while the component automatically calculates the subtotal.

## Props

The component accepts:

- `productName: string` — The product name.
- `price: number` — The price of one product.
- `minQuantity: number` — The minimum allowed quantity.
- `maxQuantity: number` — The maximum allowed quantity.

Example:

```tsx
<ProductQuantitySelector
  productName='Wireless Mouse'
  price={150000}
  minQuantity={1}
  maxQuantity={10}
/>
```

---

## Step-by-Step Instructions

### Step 1: Understand the Component

Identify the information that the component needs:

- Product name.
- Price per item.
- Current quantity.
- Minimum quantity.
- Maximum quantity.
- Subtotal.

Think about which values come from props and which value changes through user interaction.

**Your task:** Separate the input data from the component's state.

### Step 2: Define the Props

Create the props interface using the requirements above.

Receive all four props in your component.

**Your task:** Define the component and its TypeScript props.

### Step 3: Create the Quantity State

The initial quantity must be equal to `minQuantity`.

For example:

- `minQuantity = 1` → initial quantity is 1.
- `minQuantity = 3` → initial quantity is 3.

**Your task:** Create a React state for the current quantity.

### Step 4: Display Product Information

Display:

- Product name.
- Price per item.
- Current quantity.

Use the exact product information received through props.

**Your task:** Render the product information.

### Step 5: Implement the Increase Button

When the user clicks the increase button:

- Increase quantity by 1.
- Do not allow quantity to exceed `maxQuantity`.

Example:

If `maxQuantity = 5` and the current quantity is 4:

- Clicking increase changes quantity to 5.
- Clicking increase again must not change quantity.

**Your task:** Implement the increase handler.

### Step 6: Implement the Decrease Button

When the user clicks the decrease button:

- Decrease quantity by 1.
- Do not allow quantity to go below `minQuantity`.

Example:

If `minQuantity = 1` and current quantity is 2:

- Clicking decrease changes quantity to 1.
- Clicking decrease again must not change quantity.

**Your task:** Implement the decrease handler.

### Step 7: Handle Disabled Buttons

The buttons must reflect the quantity limits.

- Disable the decrease button when quantity equals `minQuantity`.
- Disable the increase button when quantity equals `maxQuantity`.

This prevents users from performing invalid actions.

**Your task:** Use the appropriate disabled attribute.

### Step 8: Calculate the Subtotal

The subtotal is calculated using:

`subtotal = price * quantity`

Example:

- Price: Rp150,000.
- Quantity: 3.
- Subtotal: Rp450,000.

The subtotal should update automatically whenever the quantity changes.

**Your task:** Calculate the subtotal from the current values. Avoid storing subtotal as separate state.

### Step 9: Test Edge Cases

Check these scenarios:

1. Initial quantity equals `minQuantity`.
2. Quantity cannot go below the minimum.
3. Quantity cannot exceed the maximum.
4. Increase and decrease buttons work correctly.
5. Buttons become disabled at their limits.
6. Subtotal updates after quantity changes.
7. Different product prices produce correct subtotals.
8. Minimum and maximum quantities can be different.

**Your task:** Run all provided tests and fix implementation issues.

---

## Acceptance Criteria

- [ ] Product information is displayed correctly.
- [ ] Initial quantity equals `minQuantity`.
- [ ] Increase button works correctly.
- [ ] Decrease button works correctly.
- [ ] Quantity never exceeds `maxQuantity`.
- [ ] Quantity never goes below `minQuantity`.
- [ ] Increase button is disabled at the maximum.
- [ ] Decrease button is disabled at the minimum.
- [ ] Subtotal is calculated correctly.
- [ ] Subtotal updates when quantity changes.
- [ ] All tests pass.

## Bonus Challenges

- Add an input field that allows users to type a quantity.
- Validate manually entered quantities.
- Add currency formatting using `Intl.NumberFormat`.
- Add accessible labels to the quantity controls.

## Important

Do not copy a complete solution.

Try to solve each step independently. If you get stuck, ask for help with the specific step you are working on.
