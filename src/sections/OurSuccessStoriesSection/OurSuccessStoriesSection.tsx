import SuccessStoryCard from "./components/SuccessStoryCard"

function OurSuccessStoriesSection() {
  return (
    <div className="w-full bg-primary flex">
        <section className="container">
            <h2 className="md:text-5xl text-2xl font-medium mb-7 mt-3 text-custom-shadow">Our Success Stories</h2>
            <div className="grid grid-cols-3 gap-10 mb-8">
              <div className="col-span-3 md:col-span-1">
                <SuccessStoryCard 
                imageUrl="https://tecoreng.com/_next/static/media/BettingPlatform.51c7ef29.webp"
                src="https://tecoreng.com/videos/BettingPlatform.mp4"
                title="Betting Platform" 
                description="Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more." 
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <SuccessStoryCard 
                imageUrl="https://tecoreng.com/_next/static/media/health.0d90eb43.webp" 
                src="https://tecoreng.com/videos/HelthandWellness.mp4"
                title="Health and Wellness" 
                description="Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey." 
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <SuccessStoryCard 
                imageUrl="https://tecoreng.com/_next/static/media/Ecommerce.49c8bbbd.webp"
                src="https://tecoreng.com/videos/E-Commerce.mp4"
                title="An E - Commerce" 
                description="Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship." 
                />
              </div>
            </div>

        </section>
    </div>
  )
}

export default OurSuccessStoriesSection