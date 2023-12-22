// import React from "react";
// import {Card, CardBody} from "@nextui-org/react";

// export default function About() {
//   return (
//     <section className="w-full flex-center flex-col">
     
//       <h1 className="head_text text-center">
      
//         <br className="max-md:hidden" />
//         <span className="custom_gradient_forsteps text-center">Its as easy as 123</span>
//         <br className="max-md:hidden" />
//       </h1>
//       <button onClick={() => setIsModalOpen(true)} className="mt-5 black_btn">
//           BUY NOW
//         </button>
//       <br />

      

//     </section>

//   );
// }


import React, { useState } from 'react';

const YourComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          <br className="max-md:hidden" />
          <span className="custom_gradient_forsteps text-center">Its as easy as 123</span>
          <br className="max-md:hidden" />
        </h1>
        <button onClick={() => setIsModalOpen(true)} className="mt-5 black_btn">
          BUY NOW
        </button>
        <br />
      </section>

      {/* Additional Section with Image */}
      <section className="w-full flex-center flex-col mt-8">
        <h2 className="text-2xl font-bold mb-4">Pricing Packages</h2>
        <h3 className="mb-4">Choose the perfect plan for your Instagram and YouTube needs.</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {/* Feature 1 */}
          <div className="feature-card ">
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <h1 className="text-2xl font-bold mb-4">100 ₹</h1>

            <p>Increase followers organically</p>
            <p>Increase followers organically</p>
            <p>Increase followers organically</p>
            <button onClick={() => setIsModalOpen(true)} className="mt-2 black_btn">
              Buy Now
            </button>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-[#ED9ED6] p-5 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <h1 className="text-2xl font-bold mb-4">100 ₹</h1>

            <p>Increase followers organically</p>
            <p>Increase followers organically</p>
            <p>Increase followers organically</p>
            <button onClick={() => setIsModalOpen(true)} className="mt-2 black_btn">
              Buy Now
            </button>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
          <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
          <h1 className="text-2xl font-bold mb-4">100 ₹</h1>

            <p>Increase followers organically</p>
            <p>Increase followers organically</p>
            <p>Increase followers organically</p>
            <button onClick={() => setIsModalOpen(true)} className="mt-2 black_btn">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Creative Interactive Element */}
      <section className="w-full flex-center flex-col mt-8">
        <h2 className="text-2xl font-bold mb-4">Boost Your Online Credibility and Enhance Brand Image with Our Services</h2>
        <div className="interactive-container">
          {/* Your interactive element goes here */}
          <div className="custom-interactive-element">Our services provide a quick and effective way to increase your online credibility and improve your brand image. With our help, you can gain more followers, likes, comments, and subscribers on Instagram and YouTube.</div>
        </div>
      </section>


    </div>
  );
};

export default YourComponent;
