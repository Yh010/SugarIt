import Welcome from "../../assets/Welcome.png"
import SpecialDish from "../../assets/SpecialDish.png"
function WelcomeDiv() {
  return (
  <div className="card flex flex-col justify-center  items-center">
        <img
            src={Welcome}
            alt="image 1"
            className="h-50 w-2/5 justify-center"
      />
      <div className="w-2/5 text-center mb-20">
        <p>
          Welcome to Sugar It Café! We have delicious desserts, great coffee, and tasty food, including options for people with different diets.
        </p>  
          <p>
          Our café is cozy and perfect for people who love to read books. You can relax with a book or chat with friends while enjoying our comfy seats and with a homely environment .
          </p>
        <p>
          Our staff is friendly and ready to make your visit enjoyable. Come hang out at Sugar It Café it like your second home!
        
          </p>
          
      </div>
        <img
              src={SpecialDish}
              alt="image 1"
              className="h-100 w-4/5 justify-center"
          />
      </div>  
  )
}

export default WelcomeDiv