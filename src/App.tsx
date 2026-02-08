import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import SimpleRNN from "./pages/SimpleRNN";
import GameEngine from "./pages/GameEngine";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/projects/simple-rnn" element={<SimpleRNN />} />
        <Route path="/projects/2d-engine" element={<GameEngine />} />
      </Routes>
    </BrowserRouter>
  );
}