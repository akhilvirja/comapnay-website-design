interface props{
    imgUrl? : string,
    text : string,
}

function WhyTecorengCard({imgUrl, text}: props) {
  return (
    <>
        <div className="px-2 sm:px-3">
            <div className="p-5 sm:p-8 border-1 rounded-2xl md:rounded-3xl shadow-[#01132e] shadow-xl h-20 sm:h-34 flex flex-col justify-center">
                {
                    imgUrl ? <img src={imgUrl} alt="" className="mx-auto h-8 sm:h-14" /> : <></>
                }
            <div className="pt-1 text-center text-xs sm:text-base">{text}</div>
            </div>
        </div>
    </>
  )
}

export default WhyTecorengCard