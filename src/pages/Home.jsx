import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'

const Home = () => {
  return(
    <div className='block lg:flex p-3' >
     <ContactForm/>
     <ContactList/>
    </div>
  )
}

export default Home
