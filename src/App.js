import './App.css';
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/> } /> 
        <Route path="/menu" element={<Menu/> } /> 
      </Routes>
    </div>
  );
}

export default App;
