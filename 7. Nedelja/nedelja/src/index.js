import React from 'react';
import ReactDOM from 'react-dom';
import Forma from './components/Forma';
import Card from './components/Card';

const App = ({string, url, description}) => {
  return (
    <>
      <Forma string={string}/>
      <Card url={url} description={description}/>
    </>
  )
}

let url = 'https://lh3.googleusercontent.com/proxy/UR1cvEkxVwBjgu2cOTgK_0MrYsoULuBFSoS65DqzeKhGMVj6vhTXDYCHRYzKwr7cEyFCEPtPUdmuH3jFxTWrmCgyFYZbzLVNJPKhnTQLvtmQXPLfqqLMaBspNd_oypoxfr_eyAP9_1rJftsNdw';

ReactDOM.render(
  <React.StrictMode>
    <App string='Dugme' url={url} description='Emoji koji se smeje'/>
  </React.StrictMode>,
  document.getElementById('root')
);


