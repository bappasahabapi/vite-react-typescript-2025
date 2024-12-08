```ts
import { useState } from "react";
import "./StepHomePage.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest income 🤑",
  "Life Sattle 👥 ",
];

type User = {
  name: string;
  gender?: string;
};

function StepHomePage() {
  const [user, setUser] = useState<User>({ name: "BAPPA", gender: "male" });
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((preValue) => preValue - 1);
      setUser((prevUser) => ({ ...prevUser, name: "🔙" }));
    }
  }

  function handleNext() {
    if (step < messages.length) {
      setStep((prevStep) => prevStep + 1);
      setUser((prevUser) => ({ ...prevUser, name: "➡️" }));
    }
  }

  return (
    <div>
      <button onClick={() => setIsOpen((open) => !open)} className="close">
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((_, index) => (
              <div key={index} className={step >= index + 1 ? "active" : ""}>
                {index + 1}
              </div>
            ))}

            {/* <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div> */}
          </div>

          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]}
            {user.name} {user.gender && `(${user.gender})`}
          </p>

          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button
              onClick={handleNext}
              disabled={step === messages.length}
              style={{
                backgroundColor: step === messages.length ? "#ccc" : "#7950f2", // Grey when disabled, purple otherwise
                color: "#fff",
                cursor: step === messages.length ? "not-allowed" : "pointer",
              }}
            >
              Next
            </button>
            {/* <button onClick={()=>console.log('next')}>Next</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default StepHomePage;


```