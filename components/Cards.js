'use client'
import React from 'react';

import Image from "next/image";
function Cards() {
  return (
    <>
        <section className="w-full flex-center flex-col">
     
     <h1 className="head_text text-center">
     
       <br className="max-md:hidden" />
       <span className="purple_pink_gradient text-center">Happy Customers</span>
       <br className="max-md:hidden" />
     </h1>
     <p className="mt-5 text-center text-lg">
     Read what our satisfied customers have to say
     </p>
     <br />

     

   </section>
    <div className="mt-5 flex bg-[#F5F7F8] flex-wrap justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden mx-4 my-8">
        <img className="w-full" src="/assets/images/card1.jpg" alt="Card Image 1" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#191717] text-xl mb-2">Card Title 1</div>
          <p className="text-[#191717] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden mx-4 my-8">
        <img className="w-full" src="/assets/images/card1.jpg" alt="Card Image 2" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#191717] text-xl mb-2">Card Title 2</div>
          <p className="text-[#191717] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden mx-4 my-8">
        <img className="w-full" src="/assets/images/card1.jpg" alt="Card Image 3" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#191717] text-xl mb-2">Card Title 3</div>
          <p className="text-[#191717] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden mx-4 my-8">
        <img className="w-full" src="/assets/images/card1.jpg" alt="Card Image 4" />
        <div className="px-6 py-4">
          <div className="font-bold text-[#191717] text-xl mb-2">Card Title 4</div>
          <p className="text-[#191717] text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cards;
