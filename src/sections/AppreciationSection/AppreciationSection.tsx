import AppreciationCard from "./components/AppreciationCard"
import { useMemo, useState, useEffect } from "react"

const clientData = [
  {
    clientName: "Juan S Ortiz Salazar",
    clientPosition: "Acme Corp",
    clientComment:
      "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!"
  },
  {
    clientName: "Tim Loenders",
    clientPosition: "BPOS LOENDERS GCV",
    clientComment:
      "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money."
  },
  {
    clientName: "Denis Cartin",
    clientPosition: "CTO, SoSFba",
    clientComment:
      "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project."
  },
  {
    clientName: "Kean Graham",
    clientPosition: "CEO, MonetizeMore",
    clientComment:
      "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive."
  },
  {
    clientName: "Chetan Patwardhan",
    clientPosition: "CEO, HiQuest Group of IT Companies",
    clientComment:
      "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs."
  }
];


function AppreciationSection() {
  const [slidesPerView, setSlidesPerView] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      if (w >= 1024) return 3
      if (w >= 768) return 2
      return 1
    }
    const update = () => setSlidesPerView(compute())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  
  useEffect(() => {
    setActiveIndex((i) => Math.max(0, Math.min(i, clientData.length - 1)))
  }, [slidesPerView])

  const translatePercent = useMemo(() => (100 / slidesPerView) * activeIndex, [slidesPerView, activeIndex])

  return (
    <section className="w-full bg-primary flex">
        <div className="container py-16">
            <h2 className="text-4xl sm:text-5xl mb-6">Appreciation from Clients</h2>

            <div className="relative">
              <div className="overflow-hidden px-2">
                <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${translatePercent}%)` }}>
                  {clientData.map(({clientName, clientPosition, clientComment}) => (
                    <div className="shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 pb-5">
                      <AppreciationCard clientName={clientName} clientPosition={clientPosition} clientComment={clientComment} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2">
                {clientData.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to card ${i + 1}`}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white w-6' : 'bg-white/40 w-2.5 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
        </div>
    </section> 
  )
}

export default AppreciationSection