import { useState } from 'react';

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [expandedItemId, setExpendedItemId] = useState<number | null>(null);

  const handleExpandClick = (id: number) => {
    if (expandedItemId === id) {
      setExpendedItemId(null);
      return;
    }

    setExpendedItemId(id);
  };

  return (
    <div>
      {items.map((item) => {
        const expandedItem = item.id === expandedItemId;
        return (
          <div key={item.id}>
            <button
              aria-expanded={expandedItem}
              aria-controls={`accordion-panel-${item.id}`}
              onClick={() => handleExpandClick(item.id)}
            >
              {item.question}
            </button>
            {expandedItem && <p>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
