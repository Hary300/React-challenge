import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);

  const handleLabelClick = (id: string) => {
    setActiveTabId(id);
  };

  return (
    <div>
      {tabs.map((tab) => {
        const activeTab = tab.id === activeTabId;
        return (
          <div key={tab.id}>
            <button
              onClick={() => handleLabelClick(tab.id)}
              role='tab'
              aria-controls={`panel-${tab.id}`}
              aria-selected={activeTab}
            >
              {tab.label}
            </button>
            {activeTab && (
              <p role='tabpanel' id={`panel-${tab.id}`}>
                {tab.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
