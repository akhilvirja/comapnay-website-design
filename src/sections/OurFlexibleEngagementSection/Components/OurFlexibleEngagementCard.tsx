function OurFlexibleEngagementCard({title, description} : {title: string, description : string}) {
  return (
    <>
        <div className="relative overflow-hidden group border-1 border-white rounded-3xl bg-transparent h-full transition-all duration-700 flex flex-col">
          <div className="hover-bg-overlay absolute inset-0 z-0"></div>
          <div className="relative z-10 p-4 sm:py-8 sm:px-5 mb-2 flex justify-center items-center text-xl sm:text-2xl text-primary rounded-3xl font-medium group-hover:bg-none duration-700 ease-in-out">{title}</div>
          <div className="relative z-10 mt-2.5 mb-4 px-5 text-xs md:text-lg lg:group-hover:text-primary flex-1 duration-700">{description}</div>
        </div>
    </>
  )
}

export default OurFlexibleEngagementCard

