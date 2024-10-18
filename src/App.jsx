import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore"; 
import { db } from "./config/firebase";

import ContactCard  from './components/ContactCard';

import AddAndUpdateContact from "./components/AddAndUpdateContact";
import UseDisclosure from "./hooks/useDisclosure";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contacts, setContacts] = useState([]);

  const{isOpen,onClose,onOpen}=UseDisclosure();

  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        

        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })

        
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    getContacts();
  }, []);

  const filterContacts=(e)=>{
    const value=e.target.value;
    const contactsRef = collection(db, "contacts");
        

        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          const filteredContacts=contactLists.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()));
          
          setContacts(filteredContacts);
          return filteredContacts;
        })

    
  } 



  return (
    <>
    <div className="max-w-[370px] mx-auto">
      <Navbar />
      <div className="flex gap-5">
        <div className="flex ml-5 relative items-center flex-grow">
          <FiSearch className="text-white text-2xl absolute ml-1" />
          <input onChange={filterContacts}
            type="text"
            className="flex-grow bg-transparent border text-white pl-9 border-white rounded-md h-10"
            placeholder="search"
          />
        </div>
        <div className="items-center relative mt-1.5 text-3xl">
          <FaPlus onClick={onOpen} className="text-white cursor-pointer" />
        </div>
      </div>
      <div className="mt-4">
        {contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
    <ToastContainer 
    position="bottom-center"
    />
    </>
  );
}

export default App;
