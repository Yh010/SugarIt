import AboutUsTitle from "./AboutUsTitle";
import PurnaImage from '../../assets/Purna.png'
/* const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
 */
export default function AboutUs() {
    return (
      <div>
            <div>
                <AboutUsTitle/>
            </div>
            <div>
                <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 pb-10">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 md:grid-cols-2">

                            <div>
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am
                                    <br className="block sm:hidden" /> Purna Sekhar
                                </h2>
                                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                Welcome to Sugar It Café! We have delicious desserts, great coffee, and tasty food, including options for people with different diets. Our café is cozy and perfect for people who love to read books. You can relax with a book or chat with friends while enjoying our comfy seats and with a  homely environment . Our staff is friendly and ready to make your visit enjoyable. Come hang out at Sugar It Café it like your second home!
                                </p>
                                

                                <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                    <span className="relative inline-block">
                                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span className="relative"> Have a question? </span>
                                    </span>
                                    <br className="block sm:hidden" />Ask me on <a href="#" title=""
                                        className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
                                </p>
                            </div>

                            <div className="relative">
                            
                                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={PurnaImage} alt="" />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
      </div>

  )
}