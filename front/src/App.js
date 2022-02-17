import logo from './logo.svg';
import './App.css';

import CompShowBlog from './blog/ShowBlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
