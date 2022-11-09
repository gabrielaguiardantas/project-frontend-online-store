import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './pages/ProductList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ ProductList } />
      </Switch>
    </div>
  );
}

export default App;
