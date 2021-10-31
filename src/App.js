import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Private from './component/Private/Private'
import PrivateRoute from './component/PrivareRoute/PrivateRoute';
import Register from './component/Register/Register';
import { Placeholder } from 'react-bootstrap';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import MyOrders from './component/MyOrders/MyOrders';
import ManageOrders from './component/ManageOrders/ManageOrders';
import AddOrders from './component/AddOrders/AddOrders';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/private">
              <Private></Private>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manage-orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddOrders></AddOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
