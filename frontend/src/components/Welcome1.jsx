import ScrollPics from './Scrollpics/ScrollPics'
import Offers from './Offers/Offers'
import TodaySpecial from './TodaySpecialComponents/TodaySpecial'

export default function Welcome1() {
  return (
    <div >
  <p className='welcome' style={{textAlign:'center',fontSize:'60px',color:'white',fontStyle:'italic'}}>
    Welcome to SugarIt
  </p>
  <ScrollPics />
  <div className="flex justify-evenly mt-4">
            <Offers />
            <TodaySpecial/>
        </div>
</div>
  )
}
