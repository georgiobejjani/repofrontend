import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/Register/register";
import Contact from "./components/contact/contact";
// import Shopp from "./components/shop/shopp";
// import Navbar from "./components/navbar/Navbar";
// import Nav from "./components/shopbox/Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
// import Cart from "./components/shopbox/Cart";
// import CartState from "./components/context/cart/CartState";
import Recipe from "./components/recipe/Recipe";
import Fetching from "./fetching";

const App=()=> {
  const [user, setLoginUser] = useState({});
  return (
  
     
      <div className="App">
        {/* <><Contact/> </>
        <Homepage/> */}
        {/* <Fetching/> */}
     <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <><Homepage/></> : <Login setLoginUser={setLoginUser}/>
            }
            </Route>
          <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
          <Route path="/Register"><Register/></Route>
          <Route path="/Contact"><Contact/></Route>
          <Route path="/recipe"><Recipe/></Route>
          <Route path="/packages"><Fetching/></Route>
          {/* <Route path="/shop"><CartState><Nav/><Cart/><Shopp/></CartState></Route> */}
        </Switch>
        </Router> 
     </div>
  );
}

export default App;
