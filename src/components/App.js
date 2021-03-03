import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import Layout from './Layout';
import '../components/styles/app.css';
import MessengerCustomerChat from 'react-messenger-customer-chat'
function App() {
  return (
    <BrowserRouter>
      
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        <MessengerCustomerChat
    pageId="107560224492216"
    appId="244223454045463"
    htmlRef="<REF_STRING>"
  />
    </BrowserRouter>
  );
}

export default App;
