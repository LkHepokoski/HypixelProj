import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Floors from "./pages/Floors";
import S from "./pages/S";
import NonS from "./pages/NonS";
import About from "./pages/About";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path='/items' element={<Items />} />
          <Route path='/floors' element={<Floors />} />
          <Route path='/floors/s' element={<S />} />
          <Route path='/floors/nons' element={<NonS />} />
          <Route path='/*' element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
