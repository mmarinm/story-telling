import React, { Component } from 'react';
import { LoadingPage, MainPage } from './containers';
import { injectGlobal } from 'styled-components';

injectGlobal`
	@font-face {
	  font-family: 'Slabo 27px', serif;;
	  src: url('https://fonts.googleapis.com/css?family=Bahiana|Slabo+27px');
	}

  body {
    margin: 0;
    padding: 0;
    background-color: ivory;
  }

  h1, h2, h3 {
    font-family: 'Bahiana', cursive;
  }

`;

class App extends Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
