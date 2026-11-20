import Accordion from '../components/21-accordion/Accordion';

function App() {
  return (
    <>
      <Accordion
        items={[
          {
            id: 1,
            question: 'What is React?',
            answer:
              'React is a JavaScript library for building user interfaces.',
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
        ]}
      />
    </>
  );
}

export default App;
