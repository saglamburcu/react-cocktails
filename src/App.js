import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CocktailDetails from "./pages/CocktailDetails";
import Error from "./pages/Error";
import { CocktailProvider } from "./context";

function App() {
  return (
    <article className="container">
      <CocktailProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Navbar />}>
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="cocktail/:cocktailId" element={<CocktailDetails />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CocktailProvider>
    </article>
  );
};

export default App;