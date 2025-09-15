import { useState } from "react"

function SuccessStoryCard({imageUrl, title, description, src} : {imageUrl: string, title: string, description: string, src:string}) {
  const [hovered, setHoverd] = useState<Boolean>(false)
  return (
    <>
        <div className="bg-secondary flex flex-col rounded-3xl gap-4 h-full overflow-hidden cursor-pointer transition-all"
          onMouseEnter={() => setHoverd(true)}
          onMouseLeave={() => setHoverd(false)}
        >
            <div className="w-full box-border group px-4 py-4 md:px-0 md:py-0">
                <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl md:rounded-3xl overflow-hidden">
                  {
                    !hovered ? (
                      <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover" alt=""/>
                    ) : (
                      <video className="absolute inset-0 w-full h-full object-cover" preload="auto" autoPlay muted loop playsInline>
                        <source src={src} type="video/mp4" />
                      </video>
                    )
                  }
                </div>
            </div>
            <div className="px-6.5 pb-3">
                <h3 className="text-xl sm:text-2xl mb-2">{title}</h3>
                <div>
                    <p className="text-sm sm:text-xs leading-6 tracking-wide sm:tracking-wider">{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuccessStoryCard