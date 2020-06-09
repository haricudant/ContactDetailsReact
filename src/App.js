import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import Header from "./components/layouts/Header";
import { Provider } from "./context";
import Notfound from "./components/pages/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <Header branding="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add" component={AddContacts} />

            <Route exact path="/about" component={About} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
