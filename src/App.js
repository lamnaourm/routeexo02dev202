import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/article/:id' element={<Article /> } />
      </Routes>
    </div>
  );
}

export default App;
