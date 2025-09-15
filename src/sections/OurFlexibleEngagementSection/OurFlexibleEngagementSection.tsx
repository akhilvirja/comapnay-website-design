import OurFlexibleEngagementCard from "./Components/OurFlexibleEngagementCard"

function OurFlexibleEngagementSection() {
  return (
    <section className="flex bg-primary w-full">
        <div className="container">
            <h2 className="text-2xl md:text-5xl">Our Flexible Engagement Models</h2>
            <p className="my-5 sm:my-6.5 w-full md:w-4xl text-xs leading-snug sm:text-lg">
                Our team is your partner for the next big digital leap. Our customized and highly flexible engagement models are designed to meet business objectives. All of our service engagements are focused on customer satisfaction, and we ensure that clear communication is maintained throughout.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-stretch gap-4 sm:gap-6 mb-10 sm:mb-14">
                <div>
                    <OurFlexibleEngagementCard
                    title="Hire Full-time Developer"
                    description="Looking for committed talent to drive your company's success? Our full-time dedicated developers bring expertise, reliability, and unwavering focus to your projects. With a rigorous selection process, we ensure you get top talent aligned with your goals."
                    />
                </div>
                <div>
                    <OurFlexibleEngagementCard
                    title="Hire Part-time Developer"
                    description="Need flexibility without compromising quality? Our part-time dedicated developers offer the perfect solution. Get skilled assistance on your schedule, ensuring progress without the commitment of a full-time hire."
                    />
                </div>
                <div>
                    <OurFlexibleEngagementCard
                    title="Professional Services"
                    description="Unlock your project's full potential with our professional services. From software development to project management, our experts deliver tailored solutions to drive growth and efficiency, no matter your industry or scale."
                    />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default OurFlexibleEngagementSection