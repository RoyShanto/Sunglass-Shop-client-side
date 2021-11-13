import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';

import Products from './pages/Home/Products/Products';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/home"> <Home /> </Route>
            <Route path="/login"> <Login /> </Route>
            <Route path="/explore"> <Products fromHome={false} /> </Route>
            <PrivateRoute path="/dashboard"> <Dashboard /> </PrivateRoute>
            <Route path="/contactUs"> <ContactUs /> </Route>
            <Route path="*"> <NotFound /> </Route>
          </Switch>

          <Footer />
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
