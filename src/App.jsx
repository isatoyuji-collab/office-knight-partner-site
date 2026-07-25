import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Individual from "./pages/Individual";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/individual" element={<Individual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
