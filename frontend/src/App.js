import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import NotFound from "./pages/components/NotFound";
import Profile from "./pages/Profile";
import Dash from "./pages/Home2";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/support" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Dash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;