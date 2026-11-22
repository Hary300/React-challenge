# Star Rating Component

## Objective

Build an interactive star rating component commonly used in product reviews, customer feedback forms, and rating systems.

## Props

The component accepts:

- `maxRating: number` — The maximum number of stars.

Example:

```tsx
<StarRating maxRating={5} />
```

---

## Step-by-Step Instructions

### Step 1: Understand the Component

Before writing code, identify what the component needs to do.

For example, when `maxRating` is 5:

- Display 5 stars.
- Initially, no stars are selected.
- Users can click a star to submit their rating.
- The selected rating must be displayed.

Think about what information the component needs to remember.

**Your task:** Identify which values should be stored in React state and which values can be calculated.

### Step 2: Define the Component Props

Create the `StarRating` component.

It must accept:

- `maxRating: number`

Use this prop to determine how many stars should be rendered.

**Your task:** Define the props type and receive the prop in your component.

### Step 3: Create the Rating State

The component needs to remember the rating selected by the user.

Requirements:

- Initial rating must be `0`.
- A value of `0` means no rating has been selected.
- A value from `1` to `maxRating` represents the selected rating.

**Your task:** Create the appropriate React state.

### Step 4: Render the Stars

Render the stars dynamically based on `maxRating`.

For example:

- `maxRating = 3` → display 3 stars.
- `maxRating = 5` → display 5 stars.
- `maxRating = 7` → display 7 stars.

**Your task:** Use JavaScript to generate the correct number of star buttons.

Each button must have an accessible name:

- `Rate 1 out of 5`
- `Rate 2 out of 5`
- `Rate 3 out of 5`

The number in the accessible name must match the actual rating and maximum rating.

### Step 5: Implement the Click Interaction

When a user clicks a star, the component must update its selected rating.

Example:

1. User clicks star number 3.
2. The selected rating becomes 3.
3. The component displays `Your rating: 3 / 5`.

Users must also be able to change their rating.

Example:

1. User selects rating 2.
2. User changes it to rating 4.
3. The displayed rating becomes `Your rating: 4 / 5`.

Clicking the currently selected star again must not reset the rating.

**Your task:** Implement the click handler and update the state.

### Step 6: Show the Selected Stars

The stars must visually represent the selected rating.

Example:

If the selected rating is 3 out of 5:

- Star 1: selected.
- Star 2: selected.
- Star 3: selected.
- Star 4: unselected.
- Star 5: unselected.

Use `aria-pressed` to communicate the selected state:

- Selected star: `true`.
- Unselected star: `false`.

**Your task:** Determine how to calculate whether each star is selected.

### Step 7: Display the Rating Information

The component must display different messages depending on its state.

When no rating is selected:

`No rating selected.`

When a rating is selected:

`Your rating: X / Y`

Where:

- `X` is the selected rating.
- `Y` is the maximum rating.

**Your task:** Render the appropriate message based on the current state.

### Step 8: Test Edge Cases

Make sure your component handles these situations:

1. `maxRating` is 1.
2. `maxRating` is greater than 5.
3. The user selects the first star.
4. The user selects the last star.
5. The user changes their rating.
6. The user clicks the same rating again.
7. No rating has been selected.

**Your task:** Run the provided test suite and fix any implementation issues.

---

## Acceptance Criteria

Your component is complete when:

- [ ] The number of stars matches `maxRating`.
- [ ] The initial rating is 0.
- [ ] Users can select a rating.
- [ ] Users can change their rating.
- [ ] Clicking the same rating does not reset it.
- [ ] Selected stars are visually distinguishable.
- [ ] Selected stars have `aria-pressed="true"`.
- [ ] Unselected stars have `aria-pressed="false"`.
- [ ] Every star has an accessible name.
- [ ] The rating message updates correctly.
- [ ] All provided tests pass.

## Bonus Challenges

After completing all requirements:

- Add keyboard accessibility.
- Add a rating description, such as Poor, Average, Good, or Excellent.
- Add hover effects to preview a rating before clicking.

## Important

Do not copy a complete solution.

Try to solve each step independently. If you get stuck, ask for help with the specific step you are working on.
