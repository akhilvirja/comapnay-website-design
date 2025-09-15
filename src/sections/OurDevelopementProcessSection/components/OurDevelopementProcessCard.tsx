
function OurDevelopementProcessCard({title, description, img, isEven}: {title: string, description: string, img: string, isEven:boolean}) {
  return (
    <>
      <div className={`h-24 w-64 md:h-50 md:w-138 lg:h-64 lg:w-165 bg-linear-94 from-4% from-[#26426b] to-98% to-[#0017386b] our-developement-process-card lg:rounded-l-3xl rounded-xl ${ isEven ? "flex-row-reverse text-right -scale-x-100 self-end" : ""}`}>
        <div className="pl-2 lg:pl-8 pt-2 lg:pt-8 flex items-center h-full">
          <div className={`h-12 md:h-24 lg:h-40 w-12 md:w-24 lg:w-40 rounded-full mx-2 md:mx-6 bg-[#112542] flex justify-center items-center our-developement-process-card-round-img ${isEven ? "-scale-x-100" : ""}`}>
            <img src={img} className="md:h-15 md:w-15 h-9 w-9" />
          </div>
          <div className={`lg:w-100 md:w-68  w-45 mt-10 ${isEven ? "-scale-x-100" : ""}`}>
            <h3 className="lg:pb-4 mb-2 lg:text-2xl md:text-xl ">{title}</h3>
            <p className="md:mb-4 text-[8px] lg:text-base md:text-[14px]">{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurDevelopementProcessCard