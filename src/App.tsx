import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Since from "./pages/Since";

export default function App() {
  return (
    <Routes>
      <Route path="/:description/:time" element={<Since />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
