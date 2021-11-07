import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from './components/Main/Main';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Facebook from './components/Facebook/Facebook';
import Instagram from './components/Instagram/Instagram';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
    
      {/* <Main/> */}
      <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/facebook" element={<Facebook/>} exact/>
      <Route path="/instagram" element={<Instagram/>} exact/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
