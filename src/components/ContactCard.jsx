
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import {db} from "../config/firebase";
import { doc, deleteDoc } from 'firebase/firestore';
import AddAndUpdateContact from './AddAndUpdateContact';
import UseDisclosure from '../hooks/useDisclosure';
import { toast } from 'react-toastify';

function ContactCard({contact}) {
  const {isOpen,onClose,onOpen}=UseDisclosure();

  
  const deleteContact=async(id)=>{
      try{
        await deleteDoc(doc(db,"contacts",id))
        toast.success("Deleted Succesfully")
      }
      catch(error){
        console.log(error);
      }
  }
    return (
        <div className='text-white'>
             <div key={contact.id} className="justify-between items-center p-2 rounded-lg border flex mt-1">
           <div className="flex gap-2 text-white">
           <HiOutlineUserCircle className="text-orange  text-4xl mt-1" />
           <div className=" text-white ">

            <h2 className="text-md font-medium text-white">{contact.name}</h2>
            <p className="text-sm text-white">{contact.Email}</p>
           </div>
           </div>
           <div className=" text-3xl flex gap-2 "> 
                <RiEditCircleLine onClick={onOpen} className="text-orange cursor-pointer"/>
                <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-orange cursor-pointer "></IoMdTrash>
           </div>
          </div>
          <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </div>
        
    )
}

export default ContactCard;
