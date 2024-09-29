import './App.css';
import {Route} from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/Layout/Header';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
        <Header />
        <main>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/product-details'>
      <ProductDetails />
      </Route>
        </main>
    </div>
  );
}

export default App;
