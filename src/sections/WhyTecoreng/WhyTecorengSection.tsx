import Button from "../../components/ui/Button"
import WhyTecorengCard from "./Components/WhyTecorengCard"

function WhyTecorengSection() {
  return (
    <section className="bg-secondary py-9.5 flex">
        <div className="container">
            <div>
                <h2 className=" text-2xl md:text-4xl lg:text-5xl tracking-widest mb-2 uppercase text-outline">
                    Why Tecoreng for your next project
                </h2>
                <p className="mt-6 sm:mt-9.5 mb-6.5 w-full md:w-2/3 text-xs md:text-lg">
                    Introducing Technical Core Engineers (TCE), the intersection of technology and innovation. At TCE, we excel in delivering exceptional IT services customized to fulfill your development requirements. Harnessing our expertise and enthusiasm, we breathe life into your ideas. Backed by a team of seasoned developers with extensive knowledge in various programming technologies, our dedication is unwavering, ensuring the delivery of outstanding results. Our mission is straightforward: decode the language of binary and transform it into extraordinary digital solutions that empower your business.
                </p>
                <Button text="GET IN TOUCH" />
                <div className="pt-12 sm:pt-18 grid grid-cols-2 md:grid-cols-4 gap-y-8 sm:gap-y-14 md:gap-y-20 md:gap-x-6 gap-x-2">
                    <div className="col-span-1">
                        <WhyTecorengCard imgUrl="https://tecoreng.com/_next/static/media/Reporting-Analysis-web.495ca138.webp" text="Reporting & Analysis" />
                    </div>
                    <div className="col-span-1">
                        <WhyTecorengCard imgUrl="https://tecoreng.com/_next/static/media/On-Time-Delivery-web.1dff7f31.webp" text="On-Time Delivery" />
                    </div>
                    <div className="col-span-1">
                        <WhyTecorengCard imgUrl="https://tecoreng.com/_next/static/media/SeamlessCommunicationWeb.1f75d8f0.webp" text="Seamless Communication" />
                    </div>
                    <div className="col-span-1">
                        <WhyTecorengCard imgUrl="https://tecoreng.com/_next/static/media/game-icons-sands-of-time-web.b861aa2e.webp" text="Post Launch Support" />
                    </div>
                    
                    <div className="col-span-1">
                        <WhyTecorengCard text="Agile Methodology" />
                    </div>
                    <div className="col-span-1">
                        <WhyTecorengCard text="Certified Experts" />
                    </div>
                    <div className="col-span-1">
                        <WhyTecorengCard text="Budget Friendly" />
                    </div>
                    <div className="col-span-1">
                        <WhyTecorengCard text="100% Client Expectation" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyTecorengSection