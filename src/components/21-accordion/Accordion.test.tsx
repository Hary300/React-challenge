import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

const items = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library.',
  },
  {
    id: 2,
    question: 'What is TypeScript?',
    answer: 'TypeScript is a typed superset of JavaScript.',
  },
  {
    id: 3,
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript.',
  },
];

describe('Accordion', () => {
  it('should render all questions', () => {
    render(<Accordion items={items} />);

    items.forEach((item) => {
      expect(
        screen.getByRole('button', { name: item.question })
      ).toBeInTheDocument();
    });
  });

  it('should hide all answers initially', () => {
    render(<Accordion items={items} />);

    items.forEach((item) => {
      expect(screen.queryByText(item.answer)).not.toBeInTheDocument();
    });
  });

  it('should display an answer when its question is clicked', () => {
    render(<Accordion items={items} />);

    fireEvent.click(screen.getByRole('button', { name: 'What is React?' }));

    expect(
      screen.getByText('React is a JavaScript library.')
    ).toBeInTheDocument();
  });

  it('should hide an answer when its question is clicked again', () => {
    render(<Accordion items={items} />);

    const button = screen.getByRole('button', {
      name: 'What is React?',
    });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(
      screen.queryByText('React is a JavaScript library.')
    ).not.toBeInTheDocument();
  });

  it('should allow only one item to be expanded at a time', () => {
    render(<Accordion items={items} />);

    fireEvent.click(screen.getByRole('button', { name: 'What is React?' }));

    fireEvent.click(
      screen.getByRole('button', { name: 'What is TypeScript?' })
    );

    expect(
      screen.queryByText('React is a JavaScript library.')
    ).not.toBeInTheDocument();

    expect(
      screen.getByText('TypeScript is a typed superset of JavaScript.')
    ).toBeInTheDocument();
  });

  it('should expose the correct aria-expanded state', () => {
    render(<Accordion items={items} />);

    const button = screen.getByRole('button', {
      name: 'What is React?',
    });

    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should associate the button with its answer panel', () => {
    render(<Accordion items={items} />);

    const button = screen.getByRole('button', {
      name: 'What is React?',
    });

    expect(button).toHaveAttribute('aria-controls', 'accordion-panel-1');
  });
});
