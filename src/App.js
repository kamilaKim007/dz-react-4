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
import "./i18n";
import { Suspense } from "react";
import Catalog from "./pages/Catalog/Catalog";
import PopularQuestion from "./pages/PopularQue/PopularQuestion";



function App() {
  return (
   <Suspense fallback={"...loading"}>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/> 
      <Route path="about" element={<About/>}/>  
      <Route path="catalog" element={<Catalog/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="question" element={<PopularQuestion/>}/>
      </Route>
      <Route path="custom" element={<Custom/>}/>
    </Routes>
    </Suspense>
  );
}

export default App;
