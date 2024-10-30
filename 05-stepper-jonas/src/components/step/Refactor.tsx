import { useState } from "react";
import "./StepHomePage.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Life Settle 👥",
];

type User = {
  name: string;
  gender?: string;
};

type AppState = {
  user: User;
  step: number;
  isOpen: boolean;
};

function StepHomePage() {
  const [state, setState] = useState<AppState>({
    user: { name: "BAPPA", gender: "male" },
    step: 1,
    isOpen: true,
  });

  const handlePrevious = () => {
    if (state.step > 1) {
      setState((prevState) => ({
        ...prevState,
        step: prevState.step - 1,
        user: { ...prevState.user, name: "🔙" }, // Update user name on previous
      }));
    }
  };

  const handleNext = () => {
    if (state.step < messages.length) {
      setState((prevState) => ({
        ...prevState,
        step: prevState.step + 1,
        user: { ...prevState.user, name: "➡️" }, // Update user name on next
      }));
    }
  };

  const toggleIsOpen = () => {
    setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  return (
    <div>
      <button onClick={toggleIsOpen} className="close">
        {state.isOpen ? "Close" : "Open"}
      </button>

      {state.isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, index) => (
              <div key={index} className={state.step >= index + 1 ? "active" : ""}>
                {index + 1}
              </div>
            ))}
          </div>

          <p className="message">
            Step {state.step}: {messages[state.step - 1]}
            <br />
            {state.user.name} {state.user.gender && `(${state.user.gender})`}
          </p>

          <div className="buttons">
            <button onClick={handlePrevious} disabled={state.step === 1}>
              Previous
            </button>
            <button
              className="button"
              onClick={handleNext}
              disabled={state.step === messages.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StepHomePage;
