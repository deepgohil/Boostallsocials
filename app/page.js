"use client";


// import React, { useEffect, useRef } from "react";
// import Navbar from "@/components/Navbar";
// import About from "@/components/About";
// import { useState } from "react";
// import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
// import { Card } from "@nextui-org/react";
// import Cards from "@/components/Cards";
// import Footer from "@/components/Footer";

// const Home = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   const h1Ref = useRef(null);
//   const pRef = useRef(null);

//   const getLocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//           setLatitude(latitude);
//           setLongitude(longitude);
//         },
//         (error) => {
//           console.error("Error getting user's location:", error);
//         }
//       );
//     } else {
//       console.error("Geolocation is not available in this browser.");
//     }
//   };

//   useEffect(() => {
//     const addAnimationClass = (element, className, delay) => {
//       setTimeout(() => {
//         element.current.classList.add(className);
//       }, delay);
//     };

//     addAnimationClass(h1Ref, "opacity-100", 100);
//     addAnimationClass(pRef, "opacity-100", 500);
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <section className="mt-[-150px] w-full h-screen flex-center flex-col justify-center">
//         <h1
//           ref={h1Ref}
//           className="head_text text-center opacity-0 transition-opacity duration-1000 ease-in-out"
//         >
//           <br className="max-md:hidden" />
//           <span className="purple_pink_gradient text-center">Boost Your Social Media Presence Today</span>
//           <br className="max-md:hidden" />
//         </h1>
//         <p
//           ref={pRef}
//           className="mt-5 text-center text-lg opacity-0 transition-opacity duration-1000 ease-in-out"
//         >
//           Get more followers, likes, comments, and subscribers to grow your social media presence
//         </p>
//         <br />
//         <button onClick={() => setIsModalOpen(true)} className="black_btn">
//           BUY NOW
//         </button>

//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center z-100">
//             <div className="absolute inset-0" />
//             <div className="bg-white flex flex-col p-8 w-[600px] rounded-lg z-10">
//               <h2 className="text-3xl text-center font-bold">Enter Values</h2>
//               <br />
//               <p>ENTER VALUES</p>
//               <br />
//               <input
//                 className="border px-2 py-1 rounded-lg my-2"
//                 type="text"
//                 placeholder="Instagram Link"
//               />
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="bg-red-500 hover:bg-red-600 text-white font-semibold mt-4 py-2 px-6 rounded-full w-fit"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//       <About />
    
//    <Cards/>
   
//    <Footer/>
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Image from "next/image";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const h1Ref = useRef(null);
  const pRef = useRef(null);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://nightsmm.com/api/v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Cookie': 'PHPSESSID=6045f1a76c1a97e79de7afbefdeb9f20; csrf_token=60f19b0556b88e884d8a2a74e1038ed1_d913d62a789751ae249651e324f2ed1e; currency_id=2',
        },
        body: 'key=33f877981cb2b739abc5560128b328a4&action=services',
      });

      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

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

  const handleBuyNowClick = () => {
    setIsModalOpen(true);
    fetchServices(); // Fetch services when modal is opened
  };

  useEffect(() => {
    const addAnimationClass = (element, className, delay) => {
      setTimeout(() => {
        element.current.classList.add(className);
      }, delay);
    };

    addAnimationClass(h1Ref, "opacity-100", 100);
    addAnimationClass(pRef, "opacity-100", 500);
  }, []);

  return (
    <>
      <Navbar />
      <section className="mt-[-150px] w-full h-screen flex-center flex-col justify-center">
        <h1
          ref={h1Ref}
          className="head_text text-center opacity-0 transition-opacity duration-1000 ease-in-out"
        >
          <br className="max-md:hidden" />
          <span className="purple_pink_gradient text-center">Boost Your Social Media Presence Today</span>
          <br className="max-md:hidden" />
        </h1>
        <p
          ref={pRef}
          className="mt-5 text-center text-lg opacity-0 transition-opacity duration-1000 ease-in-out"
        >
          Get more followers, likes, comments, and subscribers to grow your social media presence
        </p>
        <br />
        <button onClick={handleBuyNowClick} className="black_btn">
          BUY NOW
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-100">
            <div className="absolute inset-0" />
            <div className="bg-white flex flex-col p-8 w-[600px] rounded-lg z-10">
              <h2 className="text-3xl text-center font-bold">Services</h2>
              <br />
              {services.map((service) => (
                <div key={service.service}>
                  <p>{service.name}</p>
                  {/* Display other information as needed */}
                </div>
              ))}
              <br />
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
      <About />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
