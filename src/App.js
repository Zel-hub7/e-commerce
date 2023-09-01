import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/HomePage";

const HatsPage = () => {
  return (
    <div>
      <h1>This is Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
