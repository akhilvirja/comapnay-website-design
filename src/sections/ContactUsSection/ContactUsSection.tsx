import ContactUsForm from "./components/ContactUsForm"

const socialMediaLinks: Array<string> = [
    "https://tecoreng.com/_next/static/media/TwitterFollow.99d320e4.svg",
    "https://tecoreng.com/_next/static/media/FbFollow.8f432841.svg",
    "https://tecoreng.com/_next/static/media/LinkedinFollow.213bb388.svg",
    "https://tecoreng.com/_next/static/media/PinterestFollow.24dedd45.svg",
    "https://tecoreng.com/_next/static/media/behanceFollow.8020f39c.svg",
    "https://tecoreng.com/_next/static/media/dribbleFollow.57dc1fb5.svg",
    "https://tecoreng.com/_next/static/media/mediumFollow.e83b68d2.svg",
]

function ContactUsSection() {
  return (
    <>
        <section className="w-full bg-primary pt-10">
            <div className="container grid grid-cols-12 pb-20">
                <div className="col-span-6 hidden md:block">
                    <div>
                        <h3 className="text-4xl font-medium">We Are Here To Help You</h3>
                        <div>
                            <h1 className="mt-8 text-5xl font-semibold">Let's Transform Your Vision Into Value</h1>
                        </div>
                        <div>
                            <h6 className="mt-14 mb-8 text-xl font-semibold">Contact Us</h6>
                        </div>
                        <div>
                            <div className="flex pt-1.25 mb-6.5 gap-3">
                                <img src="https://tecoreng.com/_next/static/media/skype.fa9016d5.svg" alt="" />
                                <p>biz.tecoreng</p>
                            </div>
                            <div className="flex pt-1.25 mb-13 gap-3">
                                <img src="https://tecoreng.com/_next/static/media/phone.fd7b91e0.svg" alt="" />
                                <p>+91 85117 46476</p>
                            </div>
                        </div>
                        <div className="pt-4 pl-3">
                            <h2 className="text-4xl font-bold mb-2">Our Socials</h2>
                            <p className="mb-4 font-medium tracking-normal">Don’t Miss To Follow Us On Our Social Networks Accounts.</p>
                            <div className="flex gap-4">
                                {
                                    socialMediaLinks.map((link, index) =>(
                                        <img src={link} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-6 col-span-12">
                    <ContactUsForm />
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUsSection