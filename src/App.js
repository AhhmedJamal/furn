import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Slider from "./components/Slider";
import About from "./components/About";
import "./App.css";
import Details from "./components/Details";
function App() {
  return (
    <div className=" container">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              {/* <Filter /> */}
              <Products />
            </>
          }
        />
        <Route path="About" element={<About />} />
        <Route path="product/:proId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
