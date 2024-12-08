
```javascript
/* eslint-disable react/prop-types */
export default function TabButton({ children , onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>{" "}
    </li>
  );
}
```

```javascript
import Header from "./components/Header";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

    function handleSelect() {
    console.log("hello button --selected");
  }
    function handleSelectJsx() {
    console.log("Jsx button --selected");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Tab Buttons</h2>
          <menu>
            <TabButton onSelect={handleSelect} >Component-Btn</TabButton>
            <TabButton onSelect={handleSelectJsx}>JSX-Btn</TabButton>
            <TabButton>Props-Btn</TabButton>
            <TabButton>State-Btn</TabButton>
          </menu>
          <span>useState hook</span>for Dynamic Content showing.
        </section> <hr />
      </main>
    </div>
  );
}

export default App;

```

```javascript

```