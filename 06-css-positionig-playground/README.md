#


```typescript
import React, { useState } from 'react';


const App: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState<string>('static');

  const sections = [
    {
      id: 'static',
      title: 'Static Positioning',
      code: `position: static;\nleft: 50px;\ntop: 50px;`,
    },
    {
      id: 'relative',
      title: 'Relative Positioning',
      code: `position: relative;\nleft: 50px;\ntop: 50px;`,
    },
    {
      id: 'absolute',
      title: 'Absolute Positioning',
      code: `position: absolute;\ntop: 50px;\nleft: 50px;`,
    },
    {
      id: 'fixed',
      title: 'Fixed Positioning',
      code: `position: fixed;\ntop: 50px;\nleft: 50px;`,
    },
  ];

  return (
    <div>
      <header>
        <h1>CSS Positioning Demo</h1>
      </header>
      <main>
        <div className="button-group">
          {sections.map(section => (
            <button
              key={section.id}
              className="button"
              onClick={() => setVisibleSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {sections.map(section => (
          <div
            key={section.id}
            className={`positioning-type ${section.id}`}
            style={{ display: visibleSection === section.id ? 'block' : 'none' }}
          >
            <h2>{section.title}</h2>
            <code>{section.code.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}<br />
              </React.Fragment>
            ))}</code>
            <div className="box" style={{ position: section.id, top: '50px', left: '50px' }}></div>
          </div>
        ))}
      </main>
      <footer>
        <p>&copy; www.bappasahabapi.com</p>
      </footer>
    </div>
  );
};

export default App;
```
