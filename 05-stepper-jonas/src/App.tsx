import { useState } from "react";
import StepHomePage from "./components/step/StepHomePage";
import { Modal } from "./components/Reusable Component/Modal/Modal";

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
        
        <div className="App">
            <h1>Hey, click on the button to open the modal.</h1>
            <button className="openModalBtn" onClick={() => setModalOpen(true)}>
                Open
            </button>

            <Modal
                open={modalOpen}
                titleContent={<h1> Close </h1>}
                cancelFn={() => setModalOpen(false)}
                secondaryFn={() => setModalOpen(false)}
                content={
                   <>
                     <h2>This is a modal</h2>
                     <p>You can close it by pressing Escape key, pressing close, or clicking outside the modal.</p>
                  </>

               }
           />
        </div>
        <br />
        <StepHomePage/>
    </div>
  );
}

export default App;
