import React, { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'

const initialState={
  firstName:"",
  lastName:"",
  email:"",
  department:"",
  phone:"",

}

const Home = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts"))|| [])
  const [info, setInfo] = useState(initialState)

const handleSubmit = (e) => {
  e.preventDefault();
  if (info.id) {
   setContacts(contacts.map(item=> item.id ===info.id ? info:item  )) //update 
  }  else {
      setContacts([...contacts, {...info, id:new Date().getTime()} ])  //create
    }
    setInfo(initialState);
  }
 
 


const handleDelete= (id) => {
  setContacts(contacts.filter(item=> item.id !== id))
}

useEffect(() => {
 localStorage.setItem("contacts", JSON.stringify(contacts))
}, [contacts])


  return(
    <div className='block lg:flex p-3 gap-4' >
     <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
     <ContactList contacts={contacts} handleDelete={handleDelete} setInfo={setInfo} />
    </div>
  )
}

export default Home
