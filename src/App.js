import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Router } from "react-router-dom";

//DefaultHOC
import DefaultHOC from "./HOC/Default.HOC";

//components
import Temp from "./components/temp"

function App() {
  return (

      <Routes>
        <Route path="/" element={<Temp />} />
        <Route path="/" element={<DefaultHOC />} />
      </Routes>

  );
}

export default App;
