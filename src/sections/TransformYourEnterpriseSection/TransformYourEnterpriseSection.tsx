import Button from "../../components/ui/Button"
import InfinitySymbol from "./InfinitySymbol"

function TransformYourEnterpriseSection() {
  return (
     <section className="flex py-17 bg-secondary text-white">
        <div className="container">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
                <div className="flex-1 px-4 lg:px-0">
                    <h2 className="lg:text-5xl md:text-3xl text-2xl leading-snug">Transfer your enterprise with digital innovation</h2>
                    <p className="py-6.5 lg:text-lg text-sm">Your success as a market innovator reflects our strides as a unified partner. Committed to assisting you in attaining excellence through our solutions, we boast a team of adept professionals and dynamic facilitators. Our steadfast commitment to a collaborative strategy, coupled with agile methodologies, propels business expansion. Rely on our strategic insights and development processes, and we will fuel your concepts to manifest as groundbreaking disruptions.</p>
                    <Button text={"HIRE NOW"} />
                </div>
 
                 <div className="flex-1 px-4 lg:px-0">
                   <InfinitySymbol />
                 </div>
             </div>
         </div>
     </section>
   )
 }
 
 export default TransformYourEnterpriseSection