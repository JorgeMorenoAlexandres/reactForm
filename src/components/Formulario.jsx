import React from 'react'

const Formulario = () => {
  return (
    <>
    <div className=' mt-8'>
        <div className=' flex h-screen justify-center items-center bottom-0  '>
            <form className='bg-white w-full max-w-xs shadow-md rounded px-8 pt- pb-8 mb-4 ' action="">
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="">
                        User Name
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type="text"
                        placeholder="Enter your UserName" 
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Description
                    </label>
                    <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Comments"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        type="checkbox" 
                    />
                    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                </div>
                <div className=''>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select an option</label>
                    <select id="countries"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select</option>
                        <option value="US">Select 1</option>
                        <option value="CA">Select 2</option>
                        <option value="FR">Select 3</option>
                        <option value="DE">Select 4</option>
                    </select>
                </div>

                <button className=" btn btn-primary form-control" type="submit" >Procesar</button>   
                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </form>
         </div>
    </div>
        
    </>
   
  )
}

export default Formulario
