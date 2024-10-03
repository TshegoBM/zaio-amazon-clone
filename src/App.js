import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import AuthContext from "./context/authContext";

function App() {


 
  return (
    <>
      <Header/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      </>
  );
}

export default App;
