import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/article/:id' element={<Article /> } />
      </Routes>
    </div>
  );
}

export default App;
