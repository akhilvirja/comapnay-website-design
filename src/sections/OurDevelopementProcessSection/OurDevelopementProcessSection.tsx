import OurDevelopementProcessCard from "./components/OurDevelopementProcessCard"

const cardsData = [
    {
        title: "Research and Analysis",
        description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering",
        img: "https://tecoreng.com/_next/static/media/kickOff.1c1198b2.webp",
    },
    {
        title: "Design",
        description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping",
        img: "https://tecoreng.com/_next/static/media/Design.8f887f30.webp",
    },
    {
        title: "Development",
        description: "Functional Implementation, Software Coding & Optimization",
        img: "https://tecoreng.com/_next/static/media/Development.8d074c15.webp",
    },
    {
        title: "Testing",
        description: "Quality Assurance, Troubleshooting, & Testing",
        img: "https://tecoreng.com/_next/static/media/TestingN.96b15640.webp",
    },
    {
        title: "Deployment",
        description: "Launch, Beta Live, & Live",
        img: "https://tecoreng.com/_next/static/media/Deployment.764287e6.webp",
    },
    {
        title: "Evaluation",
        description: "Performance Evaluation, & Analytics Implementation",
        img: "https://tecoreng.com/_next/static/media/Evaluation.b6ba0e9d.webp",
    },
    {
        title: "Maintenance",
        description: "Maintenance",
        img: "https://tecoreng.com/_next/static/media/Maintenance.f5f233ad.webp",
    },
]

function OurDevelopementProcessSection() {
  return (
    <>
        <section className="flex bg-secondary w-full py-9">
            <div className="container">
                <h2 className="md:text-5xl mb-2 text-2xl font-medium ">Our Development Process</h2>
                <div className="mt-10.5">
                    <img src="https://tecoreng.com/_next/static/media/ballEntry.a4003503.svg" alt="" className="hidden lg:block" />
                    <div className="flex flex-col gap-8">
                        {
                            cardsData.map((data, index) => <OurDevelopementProcessCard title={data.title} description={data.description} img={data.img} isEven={index % 2 == 1} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurDevelopementProcessSection