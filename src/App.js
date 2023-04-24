import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/about";
import Error from "./page/error";
import Home from "./page/home";
import Housing from "./page/housing";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/Kasa-OCR/" element={< Home />} />
        <Route path="/Kasa-OCR/about" element={ <About />} />
        <Route path="/Kasa-OCR/housing/:uid" element={< Housing />} />
        <Route path="*" element={< Error />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
