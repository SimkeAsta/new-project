import "./App.css";
import { BlogList } from "./components/BlogList";
import { Routes, Route } from "react-router-dom";
import { NewBlog } from "./components/NewBlog";

function App() {
  return (
    <Routes>
      <Route element={<BlogList />} path="/" />
      <Route element={<NewBlog />} path="/add" />
    </Routes>
  );
}

export default App;
