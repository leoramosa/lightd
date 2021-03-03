import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import Layout from './Layout';
import '../components/styles/app.css';

function App() {
  return (
    <BrowserRouter>
      
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
           
          </Switch>
         
          
        </Layout>

        
    </BrowserRouter>
  );
}

export default App;
