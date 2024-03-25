import ScrollPics from './Scrollpics/ScrollPics'
import Offers from './Offers/Offers'
import TodaySpecial from './TodaySpecialComponents/TodaySpecial'
import WelcomeDiv from './WelcomeDiv/WelcomeDiv'

export default function Welcome1() {
  return (
    <div style={{position: 'relative'}}>
      <p className='welcome' style={{ textAlign: 'center', fontSize: '100px', color: 'white', fontStyle: 'italic' }}>
        Welcome to SugarIt
      </p>


      

      {/* <div style={{ position: 'relative' }}>
        <ScrollPics />
        

        <div className="flex justify-evenly mt-4 offers">
          <Offers />
          <TodaySpecial />
        </div>
        <WelcomeDiv />

      </div> */}

<div className="parent-div">
      <ScrollPics />
      
      {/* <div className="flex special-offer-div">
       <Offers />
       <TodaySpecial />
      </div> */}

      <WelcomeDiv />
     
</div>

    <div className="flex special-offer-div" style={{justifyContent:'center',alignContent:'end'}}>
       <Offers/>
       <TodaySpecial/>
    </div>






    </div>
  )
}
