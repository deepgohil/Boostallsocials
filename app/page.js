"use client";
import { useState } from "react";

const Home = () => {


  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      
        <br className="max-md:hidden" />
        <span className="purple_pink_gradient text-center"> Boost Your Social Media Presence Today</span>
        <br className="max-md:hidden" />
      </h1>
      <p className="mt-5 text-center text-lg">
      Get more followers, likes, comments, and subscribers to grow your social media presence
      </p>
      <br />
      <button onClick={() => setIsModalOpen(true)} className="black_btn">
       BUY NOW
      </button>


    </section>
  );
};
export default Home;
