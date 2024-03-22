import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Mainroutes from './allroutes/Mainroutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Mainroutes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
