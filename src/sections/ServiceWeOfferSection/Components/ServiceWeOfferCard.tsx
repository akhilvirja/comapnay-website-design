interface props{
    technologyImg : string,
    technologyTitle : string,
    technologyDescription: string,
    lang1 : {
        img : string,
        name : string,
    },
    lang2 : {   
        img : string,
        name : string,
    },
    lang3 : {
        img : string,
        name : string,
    },
    lang4 : {
        img : string,
        name : string,
    },
}

function ServiceWeOfferCard({technologyImg, technologyTitle, technologyDescription, lang1, lang2, lang3, lang4} : props) {
    const languages = [lang1, lang2, lang3, lang4]
  return (
    <div>
        <div className="group border-1 border-white/25 rounded-3xl flex items-center p-3 lg:p-7.5 service-we-offer-card-background box-border">
            <img src={technologyImg} alt="Technology Image" className="w-17 sm:w-56 md:w-auto max-w-80" />
            <div className="mb-2 ml-6 sm:ml-10 lg:ml-14 w-full">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{technologyTitle}</h3>
                <p className="mt-3 sm:mt-6 w-10/12 hidden lg:group-hover:block">{technologyDescription}</p>
            </div>
            <div className="flex flex-nowrap items-start box-border">
                {
                    languages.map((lang) => (
                        <div className="px-3 sm:px-5 py-3 hidden lg:group-hover:block shrink-0">
                            <img src={lang.img} alt={lang.name} className="h-10 sm:w-12 md:w-13 mb-4 sm:mb-5 mx-auto" />
                            <p className="whitespace-wrap">{lang.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>

  )
}

export default ServiceWeOfferCard