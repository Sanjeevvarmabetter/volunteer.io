import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import NotFound from "./pages/components/NotFound";
// import Forgot from "./pages/Forgot";
// import Profile from "./pages/Profile";
// import GroupCard from "./pages/Groups";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/forgotpass" element={<Forgot/>} /> */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;