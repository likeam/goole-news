import goolge from '../assets/logo.png';
import lens from '../assets/lens.png';
import { signInWithPopup } from 'firebase/auth';
import { auth, googlePrivider } from '../firebase/setup';

function Navbar() {

    const googleSingin = async () => {
        try {
            await signInWithPopup(auth, googlePrivider)

        } catch (error) {
            console.log(error)
        }
    }

  return (
   <div className='flex items-center'>
     <div>
        <img src={goolge} className=' w-40 h-10' />
    </div>
    <div className='flex bg-zinc-100 items-center border border-spacing-1 p-3 w-6/12 rounded-lg shadow-md ml-32'>
        <img src={lens} className=' w-5 h-5' />
        <input type="text" placeholder='Search for news' className=' ml-4 bg-zinc-100' />
    </div>
    <button onClick={googleSingin} className=" bg-blue-600 text-white p-2 w-28 rounded-md">Sign In</button>
   </div>
  )
}

export default Navbar