
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
function App() {
  return(
      <Router>
        <div className="App">
          <Nav></Nav>
          <RouterURL></RouterURL>
          <Footer></Footer>
        </div>
      </Router>
  );  
}
export default App;