import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
