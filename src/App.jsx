import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Individual from "./pages/Individual";
import Support from "./pages/Support";
import OneSupport from "./pages/OneSupport";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Tokushoho from "./pages/Tokushoho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/support" element={<Support />} />
        <Route path="/one-support" element={<OneSupport />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tokushoho" element={<Tokushoho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
