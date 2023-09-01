import { Route, Routes } from "react-router-dom";
import Home from "./pages/homePage/HomePage";
import ShowPage from "./pages/ShowPage";

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
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<ShowPage />} />
      </Routes>
    </div>
  );
}

export default App;
