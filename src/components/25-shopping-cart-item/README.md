# Shopping Cart Item

## Objective

Build a reusable shopping cart item component commonly used in e-commerce applications.

Users should be able to:

- View product information.
- Increase product quantity.
- Decrease product quantity.
- See the updated subtotal.
- Remove the product from the cart.

## Props

The component accepts:

- `id: string` — Unique product identifier.
- `productName: string` — Product name.
- `category: string` — Product category.
- `price: number` — Price per item.
- `initialQuantity: number` — Initial quantity.
- `onRemove: (id: string) => void` — Callback invoked when the product is removed.

Example:

```tsx
<ShoppingCartItem
  id='product-001'
  productName='Wireless Mouse'
  category='Electronics'
  price={150000}
  initialQuantity={2}
  onRemove={(id) => console.log(id)}
/>
```

---

## Step-by-Step Instructions

### Step 1: Understand the Component

Identify the information that comes from props:

- Product ID.
- Product name.
- Category.
- Price.
- Initial quantity.
- Remove callback.

Identify which information changes after user interaction.

**Your task:** Decide which values should be stored in React state.

### Step 2: Define the Props Interface

Create the `ShoppingCartItemProps` interface.

Make sure the `onRemove` callback accepts a product ID as a string.

**Your task:** Define the props and receive them in your component.

### Step 3: Create the Quantity State

The initial quantity must come from `initialQuantity`.

For example:

- `initialQuantity = 1` → quantity starts at 1.
- `initialQuantity = 3` → quantity starts at 3.

**Your task:** Create a React state for quantity.

### Step 4: Display Product Information

Display:

- Product name.
- Category.
- Price per item.
- Current quantity.

**Your task:** Render the product information using the provided props and state.

### Step 5: Implement the Increase Button

When the user clicks the increase button:

- Increase quantity by 1.
- Update the displayed quantity.
- Update the subtotal.

There is no maximum quantity requirement in this challenge.

**Your task:** Implement the increase handler.

### Step 6: Implement the Decrease Button

When the user clicks the decrease button:

- Decrease quantity by 1.
- Do not allow quantity to become less than 1.
- Disable the decrease button when quantity equals 1.

**Your task:** Implement the decrease handler.

### Step 7: Calculate the Subtotal

Use this formula:

`subtotal = price * quantity`

Example:

- Price: 150000.
- Quantity: 3.
- Subtotal: 450000.

The subtotal must update whenever quantity changes.

**Your task:** Calculate subtotal from the current values. Do not store it as separate state.

### Step 8: Implement the Remove Button

When the user clicks Remove:

- Call the `onRemove` callback.
- Pass the current product ID to the callback.

Example:

`onRemove("product-001")`

The parent component is responsible for actually removing the item from its shopping cart.

**Your task:** Implement the remove interaction.

### Step 9: Handle Accessibility

Add accessible names to interactive buttons:

- `Increase quantity`
- `Decrease quantity`
- `Remove Wireless Mouse`

Use the `disabled` attribute when the quantity reaches its minimum.

**Your task:** Make the component accessible to users relying on assistive technology.

### Step 10: Test Edge Cases

Test these situations:

1. Initial quantity is correctly displayed.
2. Quantity increases after clicking.
3. Quantity decreases after clicking.
4. Quantity cannot go below 1.
5. Decrease button is disabled at quantity 1.
6. Subtotal updates after increasing quantity.
7. Subtotal updates after decreasing quantity.
8. Remove callback receives the correct product ID.
9. Remove callback is not called when the component is merely rendered.
10. Different products display their own information correctly.

**Your task:** Run the provided test suite and fix any implementation issues.

---

## Acceptance Criteria

- [ ] Product information is displayed correctly.
- [ ] Initial quantity comes from `initialQuantity`.
- [ ] Quantity can be increased.
- [ ] Quantity can be decreased.
- [ ] Quantity cannot be less than 1.
- [ ] Decrease button is disabled at quantity 1.
- [ ] Subtotal is calculated correctly.
- [ ] Subtotal updates after quantity changes.
- [ ] Remove button calls `onRemove`.
- [ ] The correct product ID is passed to `onRemove`.
- [ ] Interactive buttons have accessible names.
- [ ] All tests pass.

## Bonus Challenges

- Add a product image URL prop.
- Add an out-of-stock state.
- Add a confirmation dialog before removing an item.
- Build a parent ShoppingCart component that manages multiple ShoppingCartItem components.

## Important

Do not copy a complete solution.

Try to solve each step independently. If you get stuck, ask for help with the specific step you are working on.
