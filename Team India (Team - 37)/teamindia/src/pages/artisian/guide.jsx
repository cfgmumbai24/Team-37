import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Guide = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  const steps = [
    "Capture the clear Picture with a blue or white back using phone",
    "Make sure the Actual Picture is clear and not blurry and have same color as that of original artifact",
    "Upload the Picture to the website and fill the details of the artifact required",
    "Choose the Material and the quantity of the artifact",
    "And Click on submit button to get the artifact into the inventory",
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-center underline m-4">
        Guide to Uplaod Image in Artisians
      </h1>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6">
            {steps.map((step, index) => (
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                <strong>{index + 1}. </strong>
                {step}
              </p>
            ))}
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Get Started
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img
            className="object-cover w-full h-full rounded-lg shadow-lg lg:rounded-3xl opacity-90"
              src="https://miradorlife.com/wp-content/uploads/2021/08/header-6.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
