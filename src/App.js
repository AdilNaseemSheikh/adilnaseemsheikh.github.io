import "./App.css";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// TODO:
// fix icons
// fix typewriter position
// create a CV

export default App;
