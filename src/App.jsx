import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import NotFoundPage from './components/404';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="bg-bgcolor">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </div>
  );
}

export default App;
