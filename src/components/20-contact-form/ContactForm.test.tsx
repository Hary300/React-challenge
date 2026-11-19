import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('should render all form fields', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('should render the submit button', () => {
    render(<ContactForm />);

    expect(
      screen.getByRole('button', { name: 'Send Message' })
    ).toBeInTheDocument();
  });

  it('should not display a success message initially', () => {
    render(<ContactForm />);

    expect(
      screen.queryByText('Message sent successfully!')
    ).not.toBeInTheDocument();
  });

  it('should display an error when submitting an empty form', () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(screen.getByText('All fields are required.')).toBeInTheDocument();
  });

  it('should display an error when the email format is invalid', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello!' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(
      screen.getByText('Please enter a valid email address.')
    ).toBeInTheDocument();
  });

  it('should display a success message when submitting valid data', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello, this is my message.' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
  });

  it('should clear all fields after successful submission', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello, this is my message.' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(screen.getByLabelText('Name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
    expect(screen.getByLabelText('Message')).toHaveValue('');
  });

  it('should not accept whitespace-only values', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: '   ' },
    });

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'Hello!' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    expect(screen.getByText('All fields are required.')).toBeInTheDocument();
  });
});
