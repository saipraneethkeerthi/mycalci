/**
 * Importing BrowserRouter from components
 * Importing Aboutpage from components
 * 
 * @author: HARI VAMSHI
 *
 */
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Aboutpage from "./components/AboutPage"
import App from "./App"

function RouterPage() {
  
  return (
    < >
      <Router> 
        <Switch>
          <Route exact path="/" render={()=><App/>}/> 
          <Route exact path="/about" render={()=><Aboutpage/>}/> 
        </Switch>
      </Router>
       
    </>
  );
}

export default RouterPage;