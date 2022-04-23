import { BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Horoscop from "./pages/horoscop";
import HoroscopSelf from "./pages/horoscopSelf";

function App() {
  return (
   <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/horoscop" element={<Horoscop/>}/>
      <Route path="/horoscop/:id" element={<HoroscopSelf/>}/>
    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
