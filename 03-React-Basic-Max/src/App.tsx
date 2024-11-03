import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import { Props } from "./components/Props/Props";
import GuestList from "./components/State/GuestList";
import Events from "./components/Event/Events";



function App() {
  return (
    <>
      <Navigation />
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path="/props" element={<Props />} />
      </Routes>
      <Routes>
        <Route path="/state" element={<GuestList />} />
      </Routes>
      <Routes>
        <Route path="/events" element={<Events />} />
      </Routes>

      </Router>
      
    </>
  );
}

export default App;
