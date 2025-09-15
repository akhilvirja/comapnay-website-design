import IndusriesWeAreExpertCard from "./components/IndusriesWeAreExpertCard"

const IndusriesWeAreExpertIn1 = [
    {imgUrl : "https://tecoreng.com/_next/static/media/supply-chain-logistics.ca505939.webp", imgText: "Supply chain & Logistics"},
    {imgUrl : "https://tecoreng.com/_next/static/media/healthcare.1e469520.webp", imgText: "Healthcare"},
    {imgUrl : "https://tecoreng.com/_next/static/media/education.58704c82.webp", imgText: "Education"},
]
const IndusriesWeAreExpertIn2 = [
    {imgUrl : "https://tecoreng.com/_next/static/media/Banking.ac0ca362.webp", imgText: "Banking"},
    {imgUrl : "https://tecoreng.com/_next/static/media/E-commerce.498b7a79.webp", imgText: "E-commerce"},
    {imgUrl : "https://tecoreng.com/_next/static/media/Travel.6c977598.webp", imgText: "Travel"},
]

function IndustriesWeAreExpertSection() {
  return (
    <>
        <section className="flex bg-primary w-full">
            <div className="container mt-10">
                <h2 className="md:text-5xl mb-2 text-2xl">
                    Industries We are expert in
                </h2>
                    <div className="mt-5.5 flex flex-col md:flex-row md:gap-8 md:h-55 justify-between">
                        {
                            IndusriesWeAreExpertIn1.map(({imgUrl, imgText}) =>(
                                <div className="w-full md:w-auto grow-1" key={imgText}>
                                    <IndusriesWeAreExpertCard imgUrl={imgUrl} imgText={imgText} />
                                </div>
                            ) )
                        }
                    </div>
                    <div className="mt-5.5 flex flex-col md:flex-row gap-5 md:gap-8 md:h-55 justify-between">
                        {
                            IndusriesWeAreExpertIn2.map(({imgUrl, imgText}) =>(
                                <div className="w-full md:w-auto grow-1" key={imgText}>
                                    <IndusriesWeAreExpertCard imgUrl={imgUrl} imgText={imgText} />
                                </div>
                            ) )
                        }
                    </div>
            </div>
        </section>
    </>
  )
}

export default IndustriesWeAreExpertSection