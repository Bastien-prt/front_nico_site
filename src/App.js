import { Route, Switch } from 'react-router';

import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from './components/reusable/footer/Footer';
import NavBar from './components/reusable/NavBar';
import BackOffice from "./components/back-office/BackOffice";
import LoginRegistration from './components/login/LoginRegistration';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/contact" component={Contact} /> 
        <Route path ="/back-office" component={BackOffice} />
        <Route path = "/login" component={LoginRegistration} />
      </Switch> 
      <Footer />
    </div>
  );
}

export default App;
