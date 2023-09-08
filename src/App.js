import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/HomePage";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<ShowPage />} />
      </Routes>
    </div>
  );
}

export default App;
