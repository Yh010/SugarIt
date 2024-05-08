import React, { useRef, useEffect } from 'react';
import eventIntro from '../videos/main3.mp4';
import ScrollPics from '../components/Scrollpics/ScrollPics';
import { Banner } from './Banner';
import Aesthetic from '../assets/Aesthetic.png';
import Bike from '../assets/Bike.png';
import Food from '../assets/Food.png';
import Doughnut from '../assets/Doughnut.jpeg';
import Boba from '../assets/Boba.jpeg';
// import Dolls from '../assets/Dolls.png';
import Bd from '../assets/boba_doughnut.png'
import { useNavigate } from 'react-router-dom';

const TypesOfCards = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current.play();
    };

    const handleVideoEnd = () => {
      playVideo();
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('ended', handleVideoEnd);
    playVideo();

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div>
      <video
        width="100%"
        height="auto"
        autoPlay
        muted
        ref={videoRef}
        style={{ pointerEvents: 'none' }}
      >
        <source src={eventIntro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Newhomepage = () => {
  const images = [Aesthetic, Bike, Food,Bd].map((image, index) => ({
    id: `image-${index}`, // You can use index for the key if you don't have a better unique identifier
    image
  }));


let navigate = useNavigate();  
const menu_button=()=>{

navigate('/menu')


}





  return (
    <div>
      <TypesOfCards />
      <div style={{ height: '25px' }}></div>
      <div style={{textAlign:'center',justifyContent:'center'}}>
      <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2" onClick={menu_button}>Menu</button>
      
      </div>
      <div style={{ height: '25px' }}></div>
      {/* <Banner images={images} speed={20000} /> */}
      <ScrollPics />
      <div style={{ height: '25px' }}></div>
    </div>
  );
};

export default Newhomepage;
