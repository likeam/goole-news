

type profileProp = {
    setProfile:any
}

function Profile(props:profileProp) {
  return (
    <div>
        


<div id="popup-modal"  className="fixed z-50 items-start justify-start w-full h-24 md:inset-40">
    <div className="relative w-full max-w-md max-h-full p-4">
        <div className="relative rounded-lg shadow bg-slate-400 dark:bg-gray-700">
            <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-start items-start dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 text-center md:p-5">
                
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Profile
