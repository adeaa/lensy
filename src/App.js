import './App.css';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from './components/Main/Main';
import { Route,BrowserRouter as Router } from 'react-router-dom'
import Facebook from './components/Facebook/Facebook';
import Instagram from './components/Instagram/Instagram';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
    
      {/* <Main/> */}
      <Router>
      <NavBar/>
      <Route path="/" component={Home} exact/>
      <Route path="/facebook" component={Facebook} exact/>
      <Route path="/instagram" component={Instagram} exact/>
      </Router>
    </div>
  );
}

export default App;
