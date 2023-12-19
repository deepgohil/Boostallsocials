"use client";
import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

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
