# Challenge 28: Product Sort Selector

## Objective

Build a product list component that allows users to sort products using different criteria.

## Requirements

- Display all products initially.
- Provide a sorting dropdown.
- Support sorting by product name and price.
- Restore the original order using the Default option.
- Do not mutate the original products array.
- Display an empty state when no products are available.

## Step-by-Step Instructions

### Step 1: Understand the Props

The component receives an array of products.

Each product contains:

- `id`: Unique product identifier.
- `name`: Product name.
- `price`: Product price.

### Step 2: Display the Products

Render all products using `.map()`.

Each product should display its name and price.

### Step 3: Create the Sorting Dropdown

Create a controlled `<select>` element.

Use these options:

- Default
- Name: A to Z
- Name: Z to A
- Price: Low to High
- Price: High to Low

### Step 4: Manage the Sorting State

Use `useState` to store the currently selected sorting option.

The initial value should be `default`.

### Step 5: Implement Sorting Logic

Use `.sort()` to sort products based on the selected option.

Remember that `.sort()` mutates the original array.

Create a copy before sorting.

### Step 6: Sort by Product Name

Use `localeCompare()` to compare product names.

Support both ascending and descending order.

### Step 7: Sort by Price

Use numeric comparison to sort prices.

Support both low-to-high and high-to-low order.

### Step 8: Restore the Original Order

When Default is selected, display products in their original props order.

### Step 9: Handle Empty Data

If the products array is empty, display:

`No products available.`

### Step 10: Run the Tests

Run the test suite and enable skipped tests one by one.

Make sure every test passes before completing the challenge.

## Important Concepts

- `useState`
- Controlled components
- Array `.sort()`
- Array spread syntax
- `localeCompare()`
- Array immutability
- Conditional rendering
