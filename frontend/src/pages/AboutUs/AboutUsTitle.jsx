/* reference links: 
https://stackoverflow.com/questions/73597877/tailwind-infinite-horizontal-scroll-through-items 
https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
https://play.tailwindcss.com/VJvK9YXBoB?layout=horizontal
 */
const AboutUsTitle = () => {
  return (
    <div>
        <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap">
                <span className="text-4xl mx-4">Marquee Item 1</span>
                <span className="text-4xl mx-4">Marquee Item 2</span>
                <span className="text-4xl mx-4">Marquee Item 3</span>
                <span className="text-4xl mx-4">Marquee Item 4</span>
                <span className="text-4xl mx-4">Marquee Item 5</span>
            </div>

            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-4xl mx-4">Marquee Item 1</span>
                <span className="text-4xl mx-4">Marquee Item 2</span>
                <span className="text-4xl mx-4">Marquee Item 3</span>
                <span className="text-4xl mx-4">Marquee Item 4</span>
                <span className="text-4xl mx-4">Marquee Item 5</span>
            </div>
        </div>
    </div>
  );
};

export default AboutUsTitle;
