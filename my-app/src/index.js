import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import CountryList from './components/CountryList';
import Select from './components/SelectBox';
import { getAll } from './services';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAll().then(res =>{
      setCountries(res.data)
    })
  },[])

  return (
    <>
      <Select setCountries={setCountries} setShow={setShow}/>
      <hr></hr>
      <CountryList countries={countries} show={show}/>
    </>
  )
  }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
