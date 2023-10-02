import React from 'react';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
import Contactcard from "./Contactcard";

function App() {
  return (
    <div className="App">
        <Header/>
        <ContactList/>
        <Contactcard/>

    </div>
  );
}

export default App;
