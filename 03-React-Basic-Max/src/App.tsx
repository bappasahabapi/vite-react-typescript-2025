import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Navigation />
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>

      </Router>
      
    </>
  );
}

export default App;
