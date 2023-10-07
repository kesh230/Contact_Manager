import React ,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Header";
import ContactList from "./ContactList";
// import Contactcard from "./Contactcard";
import AddContact from './AddContact';
function App() {
   const [contacts,setcontacts]=useState([]);
    const addcontact=(contact)=>{
      console.log(contact);
      setcontacts([...contacts,contact])
    }
    const key="contacts";
    useEffect(()=>{
      const retrive=JSON.parse(localStorage.getItem(key));
      if(retrive) setcontacts(retrive);
 },[]);
    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(contacts))
    },[contacts]);
    
  return (
    <div className="ui container">
        <Header/>
        <AddContact addcontact={addcontact}/>
        <ContactList contacts={contacts}/>
        {/* <Contactcard/> */}

    </div>
  );
}

export default App;
