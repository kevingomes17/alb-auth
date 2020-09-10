import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

const resourceUrl1 = 'https://oidc-663207740.us-west-2.elb.amazonaws.com/headers';
const resourceUrl2 = 'https://oidc-663207740.us-west-2.elb.amazonaws.com/second';

function App() {
  const invokeMicroservice = (endpoint) => {
    console.log('invokeMicroservice: ');

    axios.get(endpoint, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(function (response) {
      // handle success
      console.log(response);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing OIDC Authentication & Authorization via ALB
        </p>
        <button onClick={() => { invokeMicroservice(resourceUrl1); } }>Invoke Endpoint 1</button>
        <button onClick={() => { invokeMicroservice(resourceUrl2); } }>Invoke Endpoint 2</button>
      </header>
    </div>
  );
}

export default App;
