function Footer() {
  const featuresMenu: Array<string> = ["Blog", "Services", "Hire Developer", "Career", "Who We Are"]
  const serviceMenu1: Array<string> = ["Web Development", "Mobile App Developement", "Game Development", "UI/UX Design", "Graphics Design"]
  const serviceMenu2: Array<string> = ["DevOps", "E-Commerce", "Digital Marketing", "Cloud Computing"]

  return (
    <div className="py-8 bg-secondary text-white ">
      <div className=" md:mx-16 mx-4">
        <div className="grid grid-cols-12">
          <div className="list-none md:col-span-3 col-span-12 md:px-4">
            <span className="text-2xl border-b-1 border-dashed">Features menu</span>
            {
              featuresMenu.map((val) => (
                <li className="my-4"><a href="">{val}</a></li>
              ))
            }
          </div>
          
          <div className="list-none col-span-5 px-3 hidden md:block">
            <span className="text-2xl border-b-1 border-dashed">Service Menu</span>
            <div className="flex justify-between">
              <div className="flex-1">
                {
                  serviceMenu1.map((val) =>(
                    <li className="my-4"><a href="">{val}</a></li>
                  ))
                }
              </div>
              <div className="flex-1">
                {
                  serviceMenu2.map((val) =>(
                    <li className="my-4"><a href="">{val}</a></li>
                  ))
                }
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 list-none col-span-12">
            <span className="text-2xl border-b-1 border-dashed">Contact Information</span>
            <li className="flex items-start my-4">
              <img src="https://tecoreng.com/_next/static/media/location.0bb9726f.svg" alt="" className="w-6 mx-2.5 my-1.25" />
              <p>904, Skywalk The Elements, Jagatpur Rd, near BSNL Office, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470</p>
            </li>
          
            <li className="flex items-start my-4">
              <img src="https://tecoreng.com/_next/static/media/location.0bb9726f.svg" alt="" className="w-6 mx-2.5 my-1.25" />
              <p>1148 S Railroad Ave, Bronxville, New York 10708, USA.</p>
            </li>
          
            <li className="flex items-start my-4">
              <img src="https://tecoreng.com/_next/static/media/mail.2f4cb1d7.svg" alt="" className="w-6 mx-2.5 my-1.25" />
              <p>sales@tecoreng.com</p>
            </li>
          
            <li className="flex items-start my-4">
              <img src="https://tecoreng.com/_next/static/media/call-us.7874a07a.webp" alt="" className="w-6 mx-2.5 my-1.25" />
              <div className="px-2.5 mt-1.25">
                <p>Call Us: </p>
                <p className="mb-2.5">HR - +91 63527 25452</p>
                <p>Sales - +91 85117 46476</p>
              </div>
            </li>
          </div>
        </div>

        <div className="pt-7 h-28 md:flex md:justify-between border-t-1 items-center">
          <div className="h-full hidden md:block">
            <img src="https://tecoreng.com/_next/static/media/logoOrange.69cb7790.svg" className="h-full w-full" alt="Tecoreng Logo"/>
          </div>

          <div className="text-center mb-3">
            <p>Copyright © 2025 by Tecoreng</p>
          </div>

          <div className="flex md:w-3xs justify-around w-full">
            <img src="https://tecoreng.com/_next/static/media/TwitterW.0b268b46.svg" className="h-5 w-6" alt="Twitter" />
            <img src="https://tecoreng.com/_next/static/media/FacebookW.ea93de86.svg" className="h-5 w-6" alt="Facebook" />
            <img src="https://tecoreng.com/_next/static/media/LinkedInW.003a7d67.svg" className="h-5 w-6" alt="LinkedIn" />
            <img src="https://tecoreng.com/_next/static/media/PinterestW.c7167c52.svg" className="h-5 w-6" alt="Pinterest" />
            <img src="https://tecoreng.com/_next/static/media/BehanceW.ec2db15d.svg" className="h-5 w-6" alt="Behance" />
            <img src="https://tecoreng.com/_next/static/media/DribbleW.2cacb9c5.svg" className="h-5 w-6" alt="Dribble" />
            <img src="https://tecoreng.com/_next/static/media/MediumW.5e5be25f.svg" className="h-5 w-6" alt="Medium" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer