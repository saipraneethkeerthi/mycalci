import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Body from "./components/Body"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"


function App() {
  
  return (
    < >
    <TopBar/>
    <Body/>
    <BottomBar/>
      {/* <Router> 
        <Switch>
          <Route exact path="/register" render={()=>PageRender(Signup,'signup')}/> 
          <Route exact path="/login" render={()=>PageRender(Login,'login')}/> 
          <Route exact path="/" render={()=>PageRender(Landing,'landing')}/> 
          <Route exact path="/dashboard" render={()=>PageRender(Dashboard)}/> 
        </Switch>
      </Router> */}
       
    </>
  );
}

export default App;
