
import { useState } from "react";
import CustomSection from "../CustomSection";
import CustomTabs from "../CustomTabs";
import CustomTabButton from "../CustomTabButton";


import {EXAMPLES_DATA} from '../../../Data/data'

type TopicKey = "components" | "jsx" | "props" | "state" | undefined;

const Examples = () => {
  const [seletedTopic, setSelectedTopic] = useState<TopicKey>();

  function handleSelect(selectedBtn: TopicKey) {
    console.log(selectedBtn);
    setSelectedTopic(selectedBtn);
  };

  //todo: Tab content
  let tabContent =<span >Please Select a Topic </span>
  if(seletedTopic){
    tabContent=(
      <div id="tab-content">
          <h3 style={{ color: "yellow" }}>{EXAMPLES_DATA[seletedTopic]?.title}</h3>
          <p>{EXAMPLES_DATA[seletedTopic]?.description}</p>
          <pre>
          <code>{EXAMPLES_DATA[seletedTopic]?.code}</code>
        </pre>
      </div>
    )
  }
  //todo: Tab Buttons
  const tabButtons = (
    <>
      <CustomTabButton
        isSelected={seletedTopic === "components"}
        onClick={() => handleSelect("components")}
        //   onSelect={() => handleSelect("components")}
      >
        Components-Btn
      </CustomTabButton>
      <CustomTabButton
        isSelected={seletedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        JSX-Btn
      </CustomTabButton>
      <CustomTabButton
         isSelected={seletedTopic === "props"}
         onClick={() => handleSelect("props")}
         //   onSelect={() => handleSelect("props")}
      >
        Props-Btn
      </CustomTabButton>
      <CustomTabButton
        isSelected={seletedTopic === "state"}
        onClick={() => handleSelect("state")}
        //   onSelect={() => handleSelect("state")}
      >
        State-Btn
      </CustomTabButton>
    </>
  );

  return (
    <CustomSection title="Example Tab Button Sections" id="examples">
      <b>UseState() Hook </b> For Dynamic Content Showing. <br />

      <CustomTabs buttons={tabButtons}>
        {
          seletedTopic && (
            <>
            <span style={{ border: "2px solid white", padding: "2px" }}>
              {seletedTopic}
            </span>{" "}
            Tab Button is selected
            </>
          )
        }
        {tabContent}
      </CustomTabs>
    </CustomSection>
  );
};

export default Examples;
