import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home"
import MyInvesments from "./pages/myInvestments"
import MyWatchlist from "./pages/watchList"
// import axios from "axios"
// import Card from "./Components/Card";
// import List from "./Components/List";
import Navbar from "./Components/Navbar"
// import Footer from "./Components/Footer"


// after successful log in
function App(){
    return(
      <>
        <div>
          <Router>
          <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path={ "/myinvestments"}>
              <MyInvesments />
            </Route>
            <Route exact path={"/mywatchlist"}>
              <MyWatchlist />
            </Route>
          </Switch>

          </Router>

        {/* <Navbar />
        <Jumbotron />
        <Footer /> */}
        </div>
        </>
    );
}

export default App;