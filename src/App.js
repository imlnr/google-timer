import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainroutes from './allroutes/Mainroutes';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
      </div>
    </BrowserRouter>
  );
}

export default App;
