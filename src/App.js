import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
