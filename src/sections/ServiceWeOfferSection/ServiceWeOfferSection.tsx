import ServiceWeOfferCard from "./Components/ServiceWeOfferCard"

const services = [
  {
    technologyImg:"https://tecoreng.com/_next/static/media/webService.682bf358.webp",
    technologyTitle:"Web Development",
    technologyDescription:"Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    lang1:{img: "https://tecoreng.com/_next/static/media/react-jsTCE.dc2e1b7f.svg", name:"ReactJs" },
    lang2:{img: "https://tecoreng.com/_next/static/media/angularTCE.190d8320.svg", name:"Angular" },
    lang3:{img: "https://tecoreng.com/_next/static/media/laravelTCE.46e12fe8.svg", name:"Laravel" },
    lang4:{img: "https://tecoreng.com/_next/static/media/nodejsTCE.ed01dd43.svg", name:"NodeJs" },
  },
  {
    technologyImg:"https://tecoreng.com/_next/static/media/mobileService.bae86b39.webp",
    technologyTitle:"Mobile App Development",
    technologyDescription:"Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
    lang1:{img: "https://tecoreng.com/_next/static/media/androidTCE.6e72b806.svg", name:"Android" },
    lang2:{img: "https://tecoreng.com/_next/static/media/apple-iconTCE.1f1db738.svg", name:"Apple" },
    lang3:{img: "https://tecoreng.com/_next/static/media/flutterTCE.f9659284.svg", name:"Flutter" },
    lang4:{img: "https://tecoreng.com/_next/static/media/ionicTCE.bd802eb7.svg", name:"Ionic" },
  },
  {
    technologyImg:"https://tecoreng.com/_next/static/media/uiuxService.3cfab62d.webp",
    technologyTitle:"Graphics Design",
    technologyDescription:"Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
    lang1:{img: "https://tecoreng.com/_next/static/media/illustrator.5ad2c418.svg", name:"illustrator" },
    lang2:{img: "https://tecoreng.com/_next/static/media/photoshop.47b0a420.svg", name:"Photoshop" },
    lang3:{img: "https://tecoreng.com/_next/static/media/devicon_sketch.f4b3cc6f.svg", name:"Coraldraw" },
    lang4:{img: "https://tecoreng.com/_next/static/media/diamond.fb00109f.svg", name:"Sketch" },
  },
  {
    technologyImg:"https://tecoreng.com/_next/static/media/UI-UX-Design.9a5d8d6e.webp",
    technologyTitle:"UI/UX Design",
    technologyDescription:"We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
    lang1:{img: "https://tecoreng.com/_next/static/media/figmalogo.660c72cf.svg", name:"Figma" },
    lang2:{img: "https://tecoreng.com/_next/static/media/adobelogo.1b26b114.svg", name:"Adobe" },
    lang3:{img: "https://tecoreng.com/_next/static/media/zeplinlogo.92fa5e83.svg", name:"Zeplin" },
    lang4:{img: "https://tecoreng.com/_next/static/media/invisionlogo.5b8d05f2.svg", name:"Invision" },
  },
  {
    technologyImg:"https://tecoreng.com/_next/static/media/quality-assurance.5549bd63.webp",
    technologyTitle:"Quality Assurance (QA)",
    technologyDescription:"Explore our user-friendly and seamless website and app development services, designed for easy management.",
    lang1:{img: "https://tecoreng.com/_next/static/media/Selenium.f2cc996a.svg", name:"Selenium" },
    lang2:{img: "https://tecoreng.com/_next/static/media/KatalonStudio.12507c3e.webp", name:"Katalon Studio" },
    lang3:{img: "https://tecoreng.com/_next/static/media/Testsigma.a369f913.svg", name:"Testsigma" },
    lang4:{img: "https://tecoreng.com/_next/static/media/TelerikTestStudio.df9de956.webp", name:"Telerik Test Studio" },
  },
  {
    technologyImg:"https://tecoreng.com/_next/static/media/digitalService.462c06ac.webp",
    technologyTitle:"Digital Marketing",
    technologyDescription:"Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
    lang1:{img: "https://tecoreng.com/_next/static/media/metaLogo.1792e208.svg", name:"meta" },
    lang2:{img: "https://tecoreng.com/_next/static/media/analyticsLogo.2a795a65.svg", name:"Analytics" },
    lang3:{img: "https://tecoreng.com/_next/static/media/adsLogo.2ad4485d.svg", name:"Google Ads" },
    lang4:{img: "https://tecoreng.com/_next/static/media/growthLogo.e5bc414a.svg", name:"Growth" },
  },
]

function ServiceWeOfferSection() {
  return (
     <section className="bg-primary py-25 text-white flex">
       <div className="container">
         <div className="">
            <h1 className="mb-2 text-2xl md:text-3xl lg:text-5xl text-custom-shadow">Services We Offer</h1>
            <p className="text-sm md:text-lg">We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfils your diverse business requirements through a number of services. We specialise in the following services:</p>
         </div>
        <div className="mt-15 sm:mt-25">
          <ul className="flex flex-col gap-6 sm:gap-10">
              {
                services.map((service) =>(
                  <li><ServiceWeOfferCard {...service} /></li>
                ))
              }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServiceWeOfferSection