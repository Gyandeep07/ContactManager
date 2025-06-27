import { useEffect, useState } from 'react'
import uuid4 from 'uuid4';
import './App.css'
import Header from './Components/Header'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList';

function App() {
   const localstrg="contact";
  const [contact,setcontact]=useState(()=>{
   return  JSON.parse(localStorage.getItem(localstrg))

   || []});
 
  useEffect(()=>{
    localStorage.setItem(localstrg,JSON.stringify(contact))
  },[contact])
 
const addContact=(data)=>{
 
  setcontact([...contact,{id:uuid4(),data}])

}
const removeContact=(id)=>{
const updatedlist=contact.filter((val)=>{
  return val.id !==id;
})
setcontact(updatedlist)
}
  return (
   <>
      {/* Full-width heading */}
     <Header/>

     <ContactForm addContact={addContact}/>
     <ContactList contact={contact} removeContact={removeContact}/>

      {/* Centered Form with margin from top */}
     
    </>
  );
}

export default App;
