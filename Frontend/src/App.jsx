import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursesList from "./pages/CoursesList";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/courses" element={<CoursesList />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}