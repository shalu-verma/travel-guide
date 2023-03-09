import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
// Components
import PageState from "./components/PageState";
import Home from "./components/Home";
import PageTopPlace from "./components/PageTopPlace";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HotelBookings from "./components/Hotels";
import FlightBookings from "./components/Flights";
import PackageBookings from "./components/Packages";

export const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const loggedUserId = sessionStorage.getItem("loggedUserId");

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedUserId ? (
          <Component {...props}>{children}</Component>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute exact path="/states/:state" component={PageState} />
          <ProtectedRoute
            exact
            path="/top-places/:place"
            component={PageTopPlace}
          />
          <ProtectedRoute
            exact
            path="/top-places/:place"
            component={PageTopPlace}
          />
          <ProtectedRoute exact path="/book-hotels" component={HotelBookings} />
          <ProtectedRoute
            exact
            path="/book-flights"
            component={FlightBookings}
          />
          <ProtectedRoute
            exact
            path="/book-package"
            component={PackageBookings}
          />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
