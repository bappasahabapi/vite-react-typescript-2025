import React, { useState } from "react";

// Information for each section
const sections = [
  {
    id: "static",
    title: "Static Positioning",
    code: `position: static;\nleft: 50px;\ntop: 50px;`,
    text:'nothing change '
  },
  {
    id: "relative",
    title: "Relative Positioning",
    code: `position: relative;\nleft: 50px;\ntop: 50px;`,
    text:'Chnage position based on its imidite parent '
  },
  {
    id: "absolute",
    title: "Absolute Positioning",
    code: `position: absolute;\ntop: 50px;\nleft: 50px;`,
    text:'Chnage position based on its root parent '
  },
  {
    id: "fixed",
    title: "Fixed Positioning",
    code: `position: fixed;\ntop: 50px;\nleft: 50px;`,
  },
];

const App: React.FC = () => {
  // State to keep track of which section is visible
  const [visibleSection, setVisibleSection] = useState("static");

  return (
    <div>
      <header>
        <h1>CSS Positioning Demo</h1>
      </header>
      <main>
        {/* Buttons to show each section */}
        <div className="button-group">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setVisibleSection(section.id)}
              className={`button ${visibleSection === section.id ? "active" : ""}`}
              // className="button"
              // className={visibleSection ===section.id ? "active": ''}
            >
              {section.title}
            </button>
          ))}
          
        </div>

        {/* Display the chosen section */}
        {sections.map((section) => (
          <div
            key={section.id}
            className={`positioning-type ${section.id}`}
            style={{
              display: visibleSection === section.id ? "block" : "none",
            }}
          >
            <h2>{section.title}</h2>
            {/* <code>{section.code}</code> */}
            <code>
              {section.code.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </code>
            <div
              className="box"
              style={{
                position: section.id as
                  | "static"
                  | "relative"
                  | "absolute"
                  | "fixed",
                top: "20px",
                left: "20px",
              }}
            >
            </div>
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
