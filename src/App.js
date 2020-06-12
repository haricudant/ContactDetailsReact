import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Contacts from "./components/contacts/Contacts";
import AddContacts from "./components/contacts/AddContacts";
import EditContacts from "./components/contacts/EditContacts";
import Header from "./components/layouts/Header";
import { Provider } from "./context";
import Notfound from "./components/pages/NotFound";
import Test from "./components/test/Test";

function App() {
  return (
    <Provider>
      <Router>
        <Header branding="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/add" component={AddContacts} />
            <Route exact path="/edit/:id" component={EditContacts} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/about" component={About} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
