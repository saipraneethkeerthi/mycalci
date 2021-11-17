/**
 * Importing BrowserRouter from components
 * Importing Aboutpage from components
 
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutpage from "./components/AboutPage";
import App from "./App";

/**
 * @description: it redirects from footer page to aboutus page
 */
function RouterPage() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <App />} />
          <Route exact path="/about" render={() => <Aboutpage />} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterPage;
