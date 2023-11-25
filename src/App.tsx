import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}>
          Login Page
        </Route>
        <Route path="/home" element={<Home />}>
          Home Page
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
