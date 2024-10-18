
import Modal from './Modal'
import { Formik,Field, Form, ErrorMessage } from 'formik'
import { addDoc, collection, updateDoc,doc } from 'firebase/firestore'
import {db} from "../config/firebase"
import { toast } from 'react-toastify'
import * as Yup from 'yup';

const ContactSchemaValidation=Yup.object().shape({
    name:Yup.string().required("Name is Required"),
    Email:Yup.string().email("Invalid Email").required("Email is Required"),
});
function AddAndUpdateContact({isOpen,onClose,isUpdate,contact}) {

    const addContact=async(contact)=>{
        try{
            const contactRef=collection(db,"contacts");
            await addDoc(contactRef,contact)
            toast.success("Added Succesfully")
            onClose()
        }
        catch(error){
            console.log(error);
        }
    }
    const updateContact=async(contact,id)=>{
        try{
            const contactRef=doc(db,"contacts",id);
            await updateDoc(contactRef,contact);
            toast.success("Updated Succesfully")
            
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <>
        <Modal isOpen={isOpen} 
          onClose={onClose}>
                <Formik 
                validationSchema={ContactSchemaValidation}
                initialValues={isUpdate?{
                     name:contact.name,
                     Email:contact.Email,
                }:{
                    name:"",
                    Email:"",
                    }} 
                    onSubmit={async(values,{resetForm})=>{
                        isUpdate?
                        await updateContact(values,contact.id):addContact(values)
                        resetForm();
                        onClose();
                        console.log(values);
                    }}
                    >
                    <Form className='flex flex-col'>
                      <div className='flex flex-col gap-1 '>
                      <label htmlFor='name'>Name</label>
                      <Field name="name" className="h-10 border"/>
                      </div>

                      <div className='text-red-600'>
                        <ErrorMessage name='name'/>
                      </div>

                      <div className='flex flex-col gap-1 '>
                      <label htmlFor='Email'>Email</label>
                      <Field type="email" name="Email" className="h-10 border"/>
                      <div className='text-red-600'>
                        <ErrorMessage name='Email'/>
                        
                      </div>
                      </div>
                      
                      <button type="submit" className='bg-orange p-3 py-1.5 border h-10  font-bold hover:border-black mt-3 self-end' >
                        
                        {isUpdate?"Update":"Add"} Contact</button>

                        
                    </Form>
                </Formik>
    
    
        </Modal>
        </>
        
    )
}

export default AddAndUpdateContact
