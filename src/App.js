import Footer from "./Layout/Footer/Footer";
import Home from "./pages/Home/Home";
import Header from "./Layout/Header/Header";
import Arrival from "./Layout/Arrival/Arrival";
import Popular from "./Layout/Popular/Popular";
import About from "./Layout/About/About";
import "./scss/style.scss";


function App() {
  return (
   <>
    <Header/>
    <Arrival/>
    <Popular/>
    <main>
      <Home/>
    </main>
    <About/>
    <Footer/>
   </>
  );
}

export default App;
