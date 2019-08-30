import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyle from "Components/GlobalStyle";
class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
