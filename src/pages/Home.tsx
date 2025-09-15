import AppreciationSection from "../sections/AppreciationSection/AppreciationSection"
import ContactUsSection from "../sections/ContactUsSection/ContactUsSection"
import GetStarted from "../sections/GetStartedSection/GetStartedSection"
import IndustriesWeAreExpertSection from "../sections/IndustriesWeAreExpertSection/IndustriesWeAreExpertSection"
import OurDevelopementProcessSection from "../sections/OurDevelopementProcessSection/OurDevelopementProcessSection"
import OurFlexibleEngagementSection from "../sections/OurFlexibleEngagementSection/OurFlexibleEngagementSection"
import OurSpecializationSection from "../sections/OurSpecialization/OurSpecializationSection"
import OurSuccessStoriesSection from "../sections/OurSuccessStoriesSection/OurSuccessStoriesSection"
import ServiceWeOfferSection from "../sections/ServiceWeOfferSection/ServiceWeOfferSection"
import TecorengInsightsSection from "../sections/TecorengInsightsSection/TecorengInsightsSection"
import TransformYourEnterpriseSection from "../sections/TransformYourEnterpriseSection/TransformYourEnterpriseSection"
import VideoSection from "../sections/VideoSection/VideoSection"
import WhyTecorengSection from "../sections/WhyTecoreng/WhyTecorengSection"

function Home() {
  return (
    <>
    <div className="pt-24 bg-blue-200">
      <GetStarted />
      <section className="bg-linear-to-b from-[#5a82a0] via-[#1a486e] to-[#02142f] from-0% via-20% to-100% h-12" />
      <VideoSection />
      <TransformYourEnterpriseSection />
      <ServiceWeOfferSection />
      <WhyTecorengSection />
      <OurSpecializationSection />
      <OurFlexibleEngagementSection />
      <OurDevelopementProcessSection />
      <OurSuccessStoriesSection />
      <IndustriesWeAreExpertSection />
      <AppreciationSection />
      <TecorengInsightsSection />
      <ContactUsSection />
    </div>
    </>
  )
}

export default Home