# Challenge 29: Product Price Range Filter

## Objective

Build a product filtering component that allows users to filter products based on their maximum price.

## Requirements

- Display all products initially.
- Provide a numeric input for the maximum price.
- Use the `maxPrice` prop as the initial input value.
- Filter products based on the selected maximum price.
- Update the displayed products whenever the input changes.
- Display the selected maximum price.
- Handle empty product arrays.
- Handle cases where no products match.
- Do not mutate the original products array.

## Step-by-Step Instructions

### Step 1: Understand the Props

The component receives:

- `products`: An array of products.
- `maxPrice`: The initial maximum price.

Each product contains an ID, name, and price.

### Step 2: Display the Products

Render the products using `.map()`.

Display each product's name and price.

### Step 3: Create the Maximum Price Input

Create a controlled numeric input.

Use `maxPrice` as its initial value.

### Step 4: Manage the Input State

Use `useState` to store the currently selected maximum price.

Update the state whenever the input changes.

### Step 5: Implement the Filtering Logic

Use `.filter()` to return products whose prices are less than or equal to the selected maximum price.

### Step 6: Display the Filtered Products

Render the filtered array instead of the original products array.

### Step 7: Display the Selected Maximum Price

Show the current maximum price so users can see their selected limit.

### Step 8: Handle No Matching Products

If products exist but none match the selected price, display:

`No products found.`

### Step 9: Handle Empty Products

If the original products array is empty, display:

`No products available.`

Make sure this condition takes priority over the no-results condition.

### Step 10: Run the Tests

Enable skipped tests one by one.

Make sure every test passes before completing the challenge.

## Important Concepts

- `useState`
- Controlled inputs
- Array `.filter()`
- Conditional rendering
- Props
- Array immutability
