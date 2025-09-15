function IndusriesWeAreExpertCard({imgUrl, imgText} : {imgUrl : string, imgText: string}) {
  return (
    <>
    <div className="md:h-55 h-48 overflow-hidden group rounded-xl box-border w-full">
        <div className="flex justify-center items-center md:h-55 h-48 w-full relative">
            <img src={imgUrl} alt="" className="w-full h-full object-cover object-center group-hover:scale-105 duration-400" />
            <h3 className="md:text-2xl text-lg absolute">{imgText}</h3>
        </div>
    </div>
    </>
  )
}

export default IndusriesWeAreExpertCard