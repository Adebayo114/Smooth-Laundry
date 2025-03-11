import HomePage from "./Components/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return <HomePage />;
}

export default App;
