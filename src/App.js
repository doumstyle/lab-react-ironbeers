import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {





  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
    
  );
}

export default App;
