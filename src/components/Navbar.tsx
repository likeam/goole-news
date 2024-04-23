import goolge from "../assets/logo.png";
import lens from "../assets/lens.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googlePrivider } from "../firebase/setup";

type searchProps = {
  setSearch: any;
};

function Navbar(props: searchProps) {
  const googleSingin = async () => {
    try {
      await signInWithPopup(auth, googlePrivider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center w-screen m-2 bg-white justify-evenly">
      <div>
        <img src={goolge} className="w-40 h-10 " />
      </div>
      <div className="flex items-center w-6/12 p-3 ml-32 border rounded-lg shadow-md outline-none bg-zinc-100 border-spacing-1">
        <img src={lens} className="w-5 h-5 " />
        <input
          onChange={(e) => props?.setSrarch(e.target.value)}
          type="text"
          placeholder="Search for news"
          className="ml-4 bg-zinc-100"
        />
      </div>
      <button
        onClick={googleSingin}
        className="p-2 text-white bg-blue-600 rounded-md w-28"
      >
        Sign In
      </button>
    </div>
  );
}

export default Navbar;
