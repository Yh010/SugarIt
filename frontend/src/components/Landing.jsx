
import  ScrollPics  from "./Scrollpics/ScrollPics"
import Offers from "./Offers/Offers"
import  TodaySpecial  from "./TodaySpecialComponents/TodaySpecial"



export default function Landing(){

    return (
        <>
        <ScrollPics />
        <div className="flex justify-evenly mt-4">
            <Offers />
            <TodaySpecial/>
        </div>
        </>
    )
}