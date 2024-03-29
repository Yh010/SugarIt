import React, { useRef, useEffect } from 'react';
import eventIntro from '../videos/cropped_one.mp4';
// import  { useRef } from 'react';


const WelcomeSection = () => (
    <div className="text-center py-10">
        <h2 className="text-4xl font-bold">Welcome to SugarIt</h2>
        <p className="text-xl mt-4">A premier restaurant in Rourkela , Odisha.</p>
    </div>
);

// const Category = ({ title, imageUrl }) => (
//     <div className="overflow-hidden">
//         <img src={imageUrl} alt={title} className="hover:scale-110 transition-transform duration-300" />
//         <h3 className="text-2xl font-bold mt-4">{title}</h3>
//     </div>
// );
const CategoryCard = ({ title, imageUrl }) => {
    return (
        <div className="relative overflow-hidden">
            <img
                src={imageUrl}
                alt={title}
                className="transition-transform duration-300 transform hover:scale-110 shadow-lg"
                style={{ width: '650px' }}
            />
            {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-4xl p-4">
                {title}
            </div> */}
        </div>
    );
};

const CategoriesSection = () => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollElement = scrollRef.current;
        const startScroll = () => {
            if (scrollElement) {
                scrollElement.scrollLeft += 1;
            }
        };
        const intervalId = setInterval(startScroll, 10);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ overflowX: 'hidden' }}>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="flexcarousel-inner">
                <div className="carousel-item active">
                    <img style={{ height: '600px', width: '350px' }} className="d-block w-100" src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=612x612&w=0&k=20&c=XLsAk571Z2kEe_x6TnXWSzsG95-2agp-TcYswQrKHuo=" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img style={{ height: '600px', width: '350px' }} className="d-block w-100" src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=612x612&w=0&k=20&c=XLsAk571Z2kEe_x6TnXWSzsG95-2agp-TcYswQrKHuo=" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img style={{ height: '600px', width: '350px' }} className="d-block w-100" src="https://media.istockphoto.com/id/868408746/photo/assorted-indian-dish.jpg?s=612x612&w=0&k=20&c=XLsAk571Z2kEe_x6TnXWSzsG95-2agp-TcYswQrKHuo=" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};


const typesofcards = () => {
    
    const videoRef = useRef(null);

    const playVideo = () => {
      videoRef.current.play();
    };
  
    const handleVideoEnd = () => {
      playVideo();
    };
  
    useEffect(() => {
      // Add the event listener for when the video ends
      const videoElement = videoRef.current;
      videoElement.addEventListener('ended', handleVideoEnd);
  
      // Auto-play the video on load by calling playVideo
      playVideo();
  
      // Cleanup the event listener when the component unmounts
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }, []);

    return (
<>
<div>
      <video
        width="100%"
        height="auto"
        autoPlay
        muted
        ref={videoRef}
        style={{ pointerEvents: 'none' }} // This will make the video not react to mouse events
      >
        <source src={eventIntro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


        
        <div className=" flex flex-col">
            

            


            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '100vh' }} className="space-x-20">
    <div style={{ display: 'flex', gap: '3%', alignItems: 'center', justifyContent: 'center' }}>
        
        <CategoryCard 
            title="Corporate" 
            imageUrl="https://www.incaexpert.com/_next/image?url=https%3A%2F%2Fwww.incaexpert.com%2Fimages%2Fft-central-1.jpg&w=1080&q=75" 
        />
        <div style={{ width: '43%' }}>
            <p className='italic' style={{ textAlign: 'justify'}}>
                <span style={{fontSize: '30px', color: '#808000' }}>Lorem Ipsum </span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </div>
</div>








<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '100vh' }} className="space-x-20">
    <div style={{ display: 'flex', gap: '3%', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '43%' }}>
            <p className='italic' style={{ textAlign: 'justify'}}>
                <span style={{fontSize: '30px', color: '#808000' }}>Lorem Ipsum </span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <CategoryCard 
            title="Corporate" 
            imageUrl="https://www.incaexpert.com/_next/image?url=https%3A%2F%2Fwww.incaexpert.com%2Fimages%2Fft-central-2.jpg&w=1080&q=75" 
        />
    </div>
</div>

            

/












            <div style={{ height: '40px' }}></div>
        </div>
 </>   );
};


const Event = () => (
    <div>
        {/* <WelcomeSection />         */}
        {/* <CategoriesSection /> */}
        {/* {<div style={{ height: '100px' }}></div>} */}
        {typesofcards()}
    </div>
);

export default Event;



