import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Filter from './components/Filter';
import Navigation from './components/Navigation';
import Users from './components/Users';
import './index.css';
import { getAllUsers } from './services';


const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(res => {
      setUsers(res.data.data);
    })
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
      <Route exact path='/'>
        <Users users={users}/>
      </Route>
      <Route path='/pretraga'>
        <Filter users={users} setUsers={setUsers}/>
      </Route>
    </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

