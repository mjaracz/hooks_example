import React from 'react';
import './App.scss';
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";

const App: React.FC = () => (
  <div className="App">
    <Header/>
    <Content/>
  </div>
);

export default App;
