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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-100">
          <div className="absolute inset-0 " />
          <div className="bg-white flex flex-col p-8 w-[600px] rounded-lg z-10">
            <h2 className="text-3xl text-center font-bold">Enter Values</h2>
            <br />
            <p>ENTER VALES</p>

            <br />
            <input
              className="border px-2 py-1 rounded-lg my-2"
              type="text"
              placeholder="instagram Link"
            ></input>
                        <button
              onClick={() => setIsModalOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold mt-4 py-2 px-6 rounded-full w-fit"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Home;
