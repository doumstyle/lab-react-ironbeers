import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App() {





  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<AllBeers />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
    
  );
}

export default App;
