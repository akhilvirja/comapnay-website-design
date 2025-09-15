interface props{
    clientName: string,
    clientPosition: string,
    clientComment: string,
}

function AppreciationCard({clientName, clientPosition, clientComment} : props) {
  return (
    <>
        <div className="mt-5 mb-10 p-8 rounded-4xl glass-box h-full">
            <div className="p-0.5">
                <h4 className="text-2xl font-semibold">{clientName}</h4>
            </div>
            <div className="p-1.25 text-xl">
                <h6>{clientPosition}</h6>
            </div>
            <div className="mt-4">
                <p>{clientComment}</p>
            </div>  
        </div>
    </>
  )
}

export default AppreciationCard