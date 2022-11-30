import Footer from "./Layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Header from "./Layout/Header/Header";
import Arrival from "./pages/Home/Arrival/Arrival";
import Popular from "./pages/Home/Popular/Popular";
import About from "./pages/Home/About/About";
import Custom from "./pages/Custom/Custom";
import NotFound from "./pages/NotFound/NotFound";
import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";


function App() {
  return (
   <>
   <Header/>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/> 
      <Route path="about" element={<About/>}/> 
      <Route path="arrival" element={<Arrival/>}/> 
      <Route path="popular" element={<Popular/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path="custom" element={<Custom/>}/>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
