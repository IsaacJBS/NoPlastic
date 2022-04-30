import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Scanner from "./pages/Scanner/Scanner";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
