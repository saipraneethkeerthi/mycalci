import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Signup from './components/test-components/globalcomponents/signup/signup'
import Login from "./components/test-components/globalcomponents/login/login"
import Landing from './components/test-components/globalcomponents/Landing'
import Dashboard from './components/test-components/globalcomponents/dashboard/dashboard'
import ErrorPage from './components/test-components/globalcomponents/404/404'
import {useSelector} from "react-redux"


function App() {
  const userData=useSelector((state)=>state.user)
  // console.log("user......",userData)
  const PageRender=(Page,auth)=>{
    console.log(auth)
    return <Page/>
  }
  return (
    < >
      <Router> 
        <Switch>
          <Route exact path="/register" render={()=>PageRender(Signup,'signup')}/> 
          <Route exact path="/login" render={()=>PageRender(Login,'login')}/> 
          <Route exact path="/" render={()=>PageRender(Landing,'landing')}/> 
          <Route exact path="/dashboard" render={()=>PageRender(Dashboard)}/> 
        </Switch>
      </Router>
       
    </>
  );
}

export default App;
