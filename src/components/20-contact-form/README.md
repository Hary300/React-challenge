# Challenge 20 - Contact Form

## Difficulty

Medium

## Description

Create a Contact Form component that allows users to enter their name, email address, and message.

When the form is submitted, validate the input fields and display a success message if all fields are valid.

## Requirements

1. Create three input fields:
   - Name
   - Email
   - Message (textarea)
2. All fields must be controlled inputs.
3. Store form values using React state.
4. Prevent the default form submission behavior.
5. Validate that all fields are required.
6. Validate that the email address has a valid email format.
7. Display an error message when validation fails.
8. Display a success message when all fields are valid.
9. Clear all fields after successful submission.
10. Do not display the success message before submission.

## Props

This component does not require any props.

## Example Usage

```tsx
<ContactForm />
```

## Expected Behavior

Initially:

- All fields are empty.
- No error or success messages are displayed.

When submitting an empty form:

- Display an error message indicating that all fields are required.

When submitting an invalid email:

- Display an email validation error.

When submitting valid data:

- Display: "Message sent successfully!"
- Clear all input fields.

## Bonus (Optional)

- Display individual validation errors for each field.
- Disable the submit button while the form is invalid.
- Add a character limit to the message field.

## Rules

- Use React functional components.
- Use TypeScript.
- Use `useState` to manage form data.
- Use an object to store all form values.
- Use `onSubmit` to handle form submission.
- Do not use external form libraries.

Good luck!
