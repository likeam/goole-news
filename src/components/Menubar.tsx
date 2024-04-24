
type setMenuProps ={
  setMenu: any
}

function Menubar(props:setMenuProps) {
  return (
    <div className="flex items-center justify-center w-screen p-2 mt-6 bg-white shadow-sm ">
      <h1 onClick={() => props?.setMenu("Home")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Home
      </h1>
      <h1 onClick={() => props?.setMenu("For you")}  className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        For you
      </h1>
      <h1 onClick={() => props?.setMenu("Following")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Following
      </h1>
      <h1  className="text-base font-medium text-gray-200 cursor-pointer ml-7 hover:text-black">
        |
      </h1>
      
      <h1 onClick={() => props?.setMenu("Pakistan")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Pakistan
      </h1>
      <h1 onClick={() => props?.setMenu("World")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        World
      </h1>
      <h1 onClick={() => props?.setMenu("Local")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Local
      </h1>
      <h1 onClick={() => props?.setMenu("Business")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Business
      </h1>
      <h1 onClick={() => props?.setMenu("Technology")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Technology
      </h1>
      <h1 onClick={() => props?.setMenu("Entertainment")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Entrtainment
      </h1>
      <h1 onClick={() => props?.setMenu("Sports")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Sports
      </h1>
      <h1 onClick={() => props?.setMenu("Science")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Science
      </h1>
      <h1 onClick={() => props?.setMenu("Health")} className="text-base font-medium text-gray-500 cursor-pointer ml-7 hover:text-black">
        Health
      </h1>
    </div>
  );
}

export default Menubar;
