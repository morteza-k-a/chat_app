import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chat from "./pages/chat";
import Join from "./pages/join";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
<Route exact path="/room" component={Chat}/>

<Route component={Join} />      </Switch>
    </BrowserRouter> 
  );
};

export default App;
