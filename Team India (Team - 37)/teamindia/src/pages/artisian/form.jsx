import React, { useEffect } from "react";
import "./form.css";
import { initFlowbite } from "flowbite";

const Form = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Guide</a>
                    </li>
                    

                </ul>
            </div>
        </div>
    </nav>
</header>
    <div className="flex-container">
      <div className="card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-100 w-4/5 p-4">
          <div className="flex justify-center">
            <img
              className="w-32 h-32"
              src="/pic/HC1.jpg"
              alt="Terracotta Ornaments"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Terracotta Ornaments
            </div>
          </div>

          <div className="button-container justify">
            <button data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Select
            </button>

            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Enter the details: 
                    </h3>
                    <button
                      type="button"
                      className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="authentication-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="p-4 md:p-5 bg-blue-200">
                    <form className="space-y-4" action="#">
                      <div>
                        <label
                          htmlFor="image"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Insert Image : 
                        </label>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          className="bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Enter Email"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="qty"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Enter Quantity :
                        </label>
                        <input
                          type="text"
                          name="qty"
                          id="qty"
                          placeholder="Quantity"
                          className="bg-blue-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-100 w-4/5 p-4">
          <div className="flex justify-center">
            <img
              className="w-32 h-32"
              src="/pic/HC2.jpg"
              alt="Macrame Based Handicraft"
            />
          </div>
          <div className="px-6 py-4 justify-between">
            <div className="font-bold text-xl mb-2 text-center">
              Macrame Based Handicraft
            </div>
          </div>
          <div className="button-container">
            <button data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Select
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-100 w-4/5 p-4">
          <div className="flex justify-center">
            <img
              className="w-32 h-32"
              src="/pic/HC3.jpg"
              alt="Moonj Based Handicrafts"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Moonj Based Handicrafts
            </div>
          </div>
          <div className="button-container">
            <button data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Select
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-100 w-4/5 p-4">
          <div className="flex justify-center">
            <img
              className=""
              src="/pic/HC4.jpg"
              alt="Banana Fiber based ornaments"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Banana Fiber based ornaments
            </div>
          </div>
          <div className="button-container">
            <button data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Select
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center h-100 w-4/5 p-4">
          <div className="flex justify-center">
            <img
              className="w-32 h-32"
              src="/pic/HC5.jpg"
              alt="Jute Bags & Allied Products"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Jute Bags & Allied Products
            </div>
          </div>
          <div className="button-container">
            <button data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Select
            </button>
          </div>
        </div>
      </div>

    </div>

    
    </>
  );
};

export default Form;
