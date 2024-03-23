import { Carousel } from "@material-tailwind/react";
import Aesthetic from "../../assets/Aesthetic.png"
import Bike from "../../assets/Bike.png"
import Dolls from "../../assets/Dollls.png"
import SugarIt from "../../assets/SugarIt.png"
import Food from "../../assets/Food.png"
 
export default function ScrollPics() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Carousel
                style={{ height: "100%", width: "100%" }}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                <div 
                    className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 p-0" // Added p-0 here
                    style={{ padding: 0 ,margin:0}} // Added inline style for zero padding
                >
                {new Array(length).fill("").map((_, i) => (
                    <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                    />
                ))}
                </div>
            )}
            >
                <img
                    src={SugarIt}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src={Food}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={Bike}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src={Dolls}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src={Aesthetic}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>      


      </div>

      
    );
}