import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="bg-bgcolor">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<SearchPage />}/>
      </Routes>
    </div>
  );
}

export default App;
