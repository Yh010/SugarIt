import React, { useRef, useEffect } from 'react';
import Event1 from '../assets/Events1.jpg'
import Corporate from '../assets/Corporate.jpg'
import Parties from '../assets/Parties.jpg'
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
                    <img style={{ height: '600px', width: '350px' }} className="d-block w-100" src={Event1} alt="First slide" />
        </div>
    );
};


const typesofcards = () => {
    return (
        <div className=" flex flex-col space-y-20">          
            <div style={{ display: 'flex', justifyContent: "center" }} className='flex space-x-20'>
                <div style={{ marginLeft: '2%' }}></div>
                <div style={{ display: 'flex' }}>
                    <div style={{display:'flex', gap:'3%'}}>
                        <CategoryCard title="Corporate" imageUrl={Corporate} class/>
                        <div style={{ width: '43%' }}> <p className='italic ' style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div>
                    </div></div>
            </div>

            <div style={{ display: 'flex', justifyContent: "center" }} className='flex space-x-10 pr-20'>
                <div style={{ marginLeft: '5%' }}></div>
                <div style={{ display: 'flex', gap: '3%' }}>
                    <div style={{ width: '46%' }}> <p className='italic' style={{textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> </div><div>
                        <CategoryCard title="Parties" imageUrl={Parties} />
                    </div></div>
            </div>

            <div style={{ height: '40px' }}></div>
        </div>       
    );
};


const Event = () => (
    <div>
        <WelcomeSection />        
        <CategoriesSection />
        {<div style={{ height: '100px' }}></div>}
        {typesofcards()}
    </div>
);

export default Event;



