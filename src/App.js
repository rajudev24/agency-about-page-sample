import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Pages/About/About/About';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Workout from './Pages/Workout/Workout';
import Footer from './Pages/Shared/Footer/Footer';
import SocialMenu from './Pages/Shared/SocialMenu/SocialMenu';


function App() {
  return (
    <div className="App">
      <SocialMenu></SocialMenu>
      <BrowserRouter>
      <Navigation></Navigation>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workout" element={<Workout/>} />
        </Routes> 
        <Footer></Footer>
        </BrowserRouter>

    </div>
  );
}

export default App;
