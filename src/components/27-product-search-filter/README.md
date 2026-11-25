# Product Search Filter

## Objective

Build a product search component commonly used in e-commerce applications.

Users should be able to search for products by name and category.

## Props

### Product

- `id: string` — Unique product identifier.
- `name: string` — Product name.
- `category: string` — Product category.
- `price: number` — Product price.

### ProductSearchFilterProps

- `products: Product[]` — List of available products.

---

## Step-by-Step Instructions

### Step 1: Define the Data Structure

Create the Product interface and ProductSearchFilterProps interface.

Understand that the component receives an array of product objects.

**Your task:** Define the TypeScript interfaces.

### Step 2: Create Search State

Create a state to store the user's search input.

Initially, the search value must be an empty string.

**Your task:** Create the appropriate React state.

### Step 3: Create the Search Input

Render a text input with the accessible name:

`Search products`

The input must be controlled by React state.

**Your task:** Connect the input value and onChange handler to your state.

### Step 4: Display All Products

Initially, display every product received through props.

Each product must display:

- Product name.
- Category.
- Price.

Use the product ID as the React key.

**Your task:** Render the product array using map().

### Step 5: Implement Search by Product Name

When users type something into the search input, filter products by name.

Example:

Search: `mouse`

Matching result: `Wireless Mouse`

Search must be case-insensitive.

**Your task:** Implement the filtering logic.

### Step 6: Implement Search by Category

Users must also be able to search by category.

Example:

Search: `electronics`

Matching results:

- Wireless Mouse
- Mechanical Keyboard

Search should match either the product name or category.

**Your task:** Extend the filtering logic.

### Step 7: Handle No Results

When no products match the search:

Display:

`No products found.`

When the search input is cleared, display all products again.

**Your task:** Implement the empty-results condition.

### Step 8: Handle Empty Product Data

When the products prop contains an empty array:

Display:

`No products available.`

This is different from `No products found.`

**Your task:** Handle both situations correctly.

### Step 9: Handle Dynamic Props

The component must respond when the products prop changes.

For example, if the parent provides a different product array, the displayed results must reflect the new data.

**Your task:** Avoid copying the products prop into unnecessary component state.

### Step 10: Run the Tests

Activate the tests one by one.

Start with the first test and make sure it passes before moving to the next.

---

## Acceptance Criteria

- [ ] Search input is controlled.
- [ ] All products appear initially.
- [ ] Products can be searched by name.
- [ ] Products can be searched by category.
- [ ] Search is case-insensitive.
- [ ] Search results update while typing.
- [ ] Empty search restores all products.
- [ ] No matching results display the correct message.
- [ ] Empty product data displays a different message.
- [ ] Updated props are reflected correctly.
- [ ] All tests pass.

## Bonus Challenges

- Add a category dropdown filter.
- Add sorting by price.
- Add sorting alphabetically.
- Add a clear search button.

## Important

Do not copy a complete solution.

Implement one requirement at a time and activate the corresponding test before moving forward.
