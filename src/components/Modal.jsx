
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({onClose,isOpen,children}) {
    return  createPortal(
        <>
      
            {isOpen &&(
            <>
            <div className=' m-auto  z-50 min-h-[250px] max-w-[80%] bg-white p-4 rounded-md h-[200px] w-[400px]   items-center fixed inset-0 '>
            <div className='flex justify-end'>
                    <AiOutlineClose onClick={onClose} className='text-2xl self-end'/>
                </div>
                {children}
                
                </div>
                
                
                <div onClick={onClose} className=' h-screen backdrop-blur w-screen absolute  top-0 z-40'/>
                </>
                )}
         
      
        </>
    ,document.getElementById("modal-root"))
}

export default Modal
