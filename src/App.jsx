import Home from "./pages/home";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/products">
        <ProductList />
        </Route>
      </Switch>
      <Home/>
    </Router>

  )
}

export default App
