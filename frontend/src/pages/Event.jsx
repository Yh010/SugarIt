import React, { useRef, useEffect } from 'react';
import Event1 from '../assets/Events1.jpg'
import Corporate from '../assets/Corporate.jpg'
import Parties from '../assets/Parties.jpg'
import EventsPlanning from '../assets/EventsPlanning.png'
import ChatterBox from "../assets/ChatterBox.png"

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
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-4xl p-4">
                {title}
            </div>
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

        <div className="carousel-item active">
                    <img style={{ height: '500px', width: '350px' }} className="d-block w-100 px-32" src={Event1} alt="First slide" />
        </div>
    );
};


const typesofcards = () => {
    return (
        <div className=" flex flex-col space-y-20">          
            <div>
                <div style={{ display: 'flex', justifyContent: "center" }} className='flex space-x-20'>
                    <div style={{ marginLeft: '2%' }}>

                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{display:'flex', gap:'3%'}}>
                            <CategoryCard title="Corporate" imageUrl={Corporate} class/>
                            <div style={{ width: '80%' }}> <p className='italic px-10' style={{textAlign:'justify'}}>Host your next corporate event at Sugar It and treat your team to a delightful experience. Whether it's a meeting, presentation, or team-building session, our cozy ambiance and delicious menu will make it a memorable occasion. Contact us to discuss custom packages tailored to your needs.</p> </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: "center" }} className='flex space-x-10 pr-20'>
                    <div style={{ marginLeft: '5%' }}></div>
                    <div style={{ display: 'flex', gap: '3%' }}>
                        <div style={{ width: '46%' }}> <p className='italic' style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div><div>
                            <CategoryCard title="Parties" imageUrl={Parties} />
                        </div>
                    </div>
                </div>
            </div>
            

            <div className='h-full w-full flex justify-center '>
                <div>
                    <img className="w-full h-full" src={ EventsPlanning} />
                </div>
                <div className='text-center'>
                    <p className="font-sans italic font-bold">
                        "Join us as our guests"
                    Where the opportunities are boundless
                    </p>
                    
                    <p className="font-sans italic font-medium">
                        Celebrate your special occasions with us
                    And craft unforgettable memories.
                    </p>

                    
                    <p className="font-sans italic">
                        *Looking for a spot to chill?
                    *Immerse yourself in the POEMS ambiance?
                    *Browse our menu for a tantalizing culinary experience.
                    </p>

                    
                    <p className="font-sans italic">
                        We also host unique EVENTS! Our dedicated
                    chefs source the freshest ingredients
                    to craft delectable dishes or snacks
                    that offer explosive flavors to elevate
                    any gathering.
                    </p>
                </div>
                <div>
                     <img className="w-full h-full" src={ ChatterBox} />
                </div>


            </div>
        </div>       
    );
};


const Event = () => (
    <div className="mt-28">      
        <CategoriesSection />
        {<div style={{ height: '100px' }}></div>}
        {typesofcards()}
    </div>
);

export default Event;



