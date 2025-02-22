import "./App.css";
import Auth from "./pages/auth";
import Home from "./pages/home";
import PrivateRoute from "./pages/private-route";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <PrivateRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </PrivateRoute>
    </BrowserRouter>
  );
}

export default App;
