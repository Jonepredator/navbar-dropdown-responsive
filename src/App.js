import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Design from './components/pages/Design';
import Development from './components/pages/Development';
import Extra1 from './components/pages/Extra1';
import Extra2 from './components/pages/Extra2';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';

function App() {
   return (
      <Router>
         <Navbar />
         <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/design' exact component={Design} />
            <Route path='/development' exact component={Development} />
            <Route path='/extra1' exact component={Extra1} />
            <Route path='/extra2' exact component={Extra2} />
            <Route path='/sign-up' exact component={SignUp} />
            <Route path='/contact-us' exact component={ContactUs} />
         </Switch>
      </Router>
   );
}

export default App;
