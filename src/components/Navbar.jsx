

function Navbar() {
    return (
       
      <div className='h-[60px] bg-white text-black m-4 rounded-md'>
        <div className='flex items-center gap-2 justify-center text-xl'>
        <img style={{height:"60px",width:"65px"}} src='/src/assets/logo-firebase.png'></img>
        <h1 className='text-black font-bold font-sans' >Firebase Contact App</h1>
        </div>
      </div>
        
    )
}

export default Navbar
