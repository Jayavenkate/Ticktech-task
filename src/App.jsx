import { Route, Routes } from "react-router-dom";
import { Home } from "./component/Home/Home";
import { NavBar } from "./component/NavBar/NavBar";
import { About } from "./component/About/About";
import { Footer } from "./component/Footer/Footer";
import "./App.css";
import { ThemeProvider } from "./component/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
