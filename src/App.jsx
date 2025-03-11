import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import Steps from "./Components/Steps";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </Router>
  );
}

export default App;
