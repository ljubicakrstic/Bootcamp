import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LaunchList from './components/LaunchList';
import './index.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllLaunches } from "./services"
import SelectList from './components/SelectList';

const App = () => {

  const [launches, setLaunches] = useState([]);
  const [year, setYear] = useState('');

  useEffect(() => {
    getAllLaunches().then(res => {
        setLaunches(res.data);
    })
  }, []);

  return (
    <>
      <Header />
      <SelectList launches={launches} setYear={setYear}/>
      <LaunchList launches={launches} year={year}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

