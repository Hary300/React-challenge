# Challenge 30: Product Stock Status

## Objective

Build a product stock status component that displays the availability status of each product based on its stock quantity.

## Requirements

- Display all products.
- Display each product's name and stock quantity.
- Determine stock status using the low stock threshold.
- Support three stock statuses:
  - In Stock
  - Low Stock
  - Out of Stock
- Use the `lowStockThreshold` prop.
- Display an empty state when no products are available.

## Step-by-Step Instructions

### Step 1: Understand the Props

The component receives:

- `products`: An array of products.
- `lowStockThreshold`: The minimum stock quantity before a product is considered low in stock.

Each product contains an ID, name, and stock quantity.

### Step 2: Display the Products

Use `.map()` to render every product.

Display its name and stock quantity.

### Step 3: Determine the Stock Status

Check each product's stock quantity.

Apply these rules in order:

1. If stock is zero, the status is Out of Stock.
2. If stock is less than or equal to the threshold, the status is Low Stock.
3. Otherwise, the status is In Stock.

### Step 4: Display the Status

Render the appropriate status for each product.

Use conditional rendering to determine which status should appear.

### Step 5: Use the Threshold Prop

Do not hardcode the low stock threshold.

Always use the value provided through `lowStockThreshold`.

### Step 6: Handle Empty Products

If the products array is empty, display:

`No products available.`

### Step 7: Run the Tests

Enable skipped tests one by one.

Make sure every test passes before completing the challenge.

## Important Concepts

- Props
- Array `.map()`
- Conditional rendering
- Comparison operators
- Conditional logic
