import { useEffect, useState } from "react"

const navbarMenus = ["Services", "About us" , "Career", "Portfolio", "Blog"]

function Navbar() {

	const [show, setShow] = useState<boolean>(true)
	const [lastScrollY, setLastScrollY] = useState<number>(0)
	const [mobileOpen, setMobileOpen] = useState<boolean>(false)

	useEffect(() =>{
		const handleScroll = () =>{
			if(window.scrollY > lastScrollY){
				setShow(false)
			}
			else{
				setShow(true)
			}
			setLastScrollY(window.scrollY)
		};
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		}
	}, [mobileOpen])

	return (
		<nav className={`h-24 w-full z-50 bg-primary flex justify-between border-b-1 border-gray-700 shadow-xs shadow-gray-700 transition-transform duration-500 fixed top-0 left-0 ${show ? "translate-y-0" : "-translate-y-full"} `}>
			<div className="w-36 flex justify-end items-center px-4">
				<img src="https://tecoreng.com/_next/static/media/logo1.2795f947.svg" alt="Tecoreng" />
			</div>

			<div className="hidden lg:flex items-center text-lg">
				<ul className="text-white flex list-none gap-7">
					{
						navbarMenus.map((menu) =>(
							<li className="relative h-24 flex items-center px-4 cursor-pointer group" key={menu}>
								<a href="#" className="text-white">
									{menu}
								</a>
								<span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
							</li>
						))
					}
				</ul>
				<div className="text-white flex items-center mx-5 ">
					<a href="#" className="px-5.5 py-2.5 outline-1 rounded-3xl">Hire Developers</a>
					<a href="#" className="px-5.5 py-2.5 outline-1 rounded-3xl ml-5 bg-[#701d04] bg-linear-95 from-[#f47b55] from-1.49% to-[#ff3d00] to-95.34% text-white">Contact Us</a>
				</div>
			</div>

			<div className="flex lg:hidden items-center pr-4">
				<button aria-label="Open menu" onClick={() => setMobileOpen(true)} className="p-2 text-white">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"/></svg>
				</button>
			</div>

			<div className={`fixed inset-0 bg-primary/95 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
				<div className={`absolute top-0 right-0 h-full w-full bg-primary transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
					<div className="h-24 flex items-center justify-between px-5 border-b-1 border-gray-700">
						<img src="https://tecoreng.com/_next/static/media/logo1.2795f947.svg" alt="Tecoreng" className="h-8" />
						<button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.29 19.7 5.7 21.11 12 14.82 18.29 21.11 19.7 19.7 13.41 13.41 19.71 7.11z"/></svg>
						</button>
					</div>
					<div className="flex flex-col px-5 py-6 text-white text-xl">
						<ul className="flex flex-col gap-4">
							{navbarMenus.map((menu) => (
								<li key={menu}>
									<a href="#" onClick={() => setMobileOpen(false)} className="block py-3 px-2 border-b-1 border-gray-700">
										{menu}
									</a>
								</li>
							))}
						</ul>
						<div className="mt-6 flex flex-col gap-3">
							<a href="#" className="px-5.5 py-2.5 outline-1 rounded-3xl text-center">Hire Developers</a>
							<a href="#" className="px-5.5 py-2.5 outline-1 rounded-3xl text-center bg-[#701d04] bg-linear-95 from-[#f47b55] from-1.49% to-[#ff3d00] to-95.34% text-white">Contact Us</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar