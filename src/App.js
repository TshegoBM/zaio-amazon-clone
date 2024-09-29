import './App.css';
import {Routes} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div >
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
