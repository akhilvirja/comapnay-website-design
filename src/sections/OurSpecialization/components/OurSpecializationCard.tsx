    import { useState, type JSX } from "react";

    interface cardData {
      title: string;
      description: string;
      icon: JSX.Element;
    }

    function OurSpecializationCard({ cardsData }: { cardsData: Array<cardData> }) {
      const [activeIndex, setActiveIndex] = useState(1); 
      const total = cardsData.length;

      const getVisibleCards = () => {
        const prev = (activeIndex - 1 + total) % total;
        const next = (activeIndex + 1) % total;
        return [prev, activeIndex, next];
      };

      const visible = getVisibleCards();

      return (
        <div className="relative flex justify-center items-center w-full h-[350px] md:h-[400px]">
          {visible.map((cardIndex, position) => {
            const card = cardsData[cardIndex];
            const isCenter = cardIndex === activeIndex;

            const visibilityClasses = "block";

            const translateClass =
              position === 0
                ? "-translate-x-[140px] sm:-translate-x-[180px] md:-translate-x-[220px] lg:-translate-x-[460px]"
                : position === 2
                ? "translate-x-[140px] sm:translate-x-[180px] md:translate-x-[220px] lg:translate-x-[460px]"
                : "";

            return (
              <div
                key={cardIndex}
                onClick={() => setActiveIndex(cardIndex)}
                className={`
                  cursor-pointer
                  transition-all duration-500 ease-in-out
                  bg-white text-black p-6 rounded-xl shadow-md absolute
                  w-[280px] md:w-[320px]
                  ${visibilityClasses}
                  ${isCenter ? "scale-110 z-20 px-10 py-3.5" : "scale-90 opacity-70 z-10"}
                  ${translateClass}
                `}
                style={{ top: 0, bottom: 0 }}
              >
                <div className="mb-4 flex justify-center text-5xl">{card.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-center text-black">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-600 text-center">{card.description}</p>
              </div>
            );
          })}
        </div>
      );
    }

    export default OurSpecializationCard;
