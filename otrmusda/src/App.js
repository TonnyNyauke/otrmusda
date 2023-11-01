import React from "react";

import {Blog, Footer, Possibility, Features, WhatOTR, Header } from './containers';
import { Cta, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <WhatOTR />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
