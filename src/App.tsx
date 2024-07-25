import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageMain } from "./pages/PageMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
