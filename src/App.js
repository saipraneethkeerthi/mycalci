import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Body from "./components/Body"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"


function App() {
  // const userData=useSelector((state)=>state.user)
  // // console.log("user......",userData)
  // const PageRender=(Page,auth)=>{
  //   console.log(auth)
  //   return <Page/>
  // }
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
