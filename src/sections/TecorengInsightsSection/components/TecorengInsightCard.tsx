interface InsightItem {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

function TecorengInsightCard({ title, date, imageUrl, description }: InsightItem) {
  return (
    <div className="max-w-96 min-w-96 h-full bg-secondary rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 flex flex-col group">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500"
        />
      </div>

      <div className="px-4 py-8 flex flex-col flex-1 h-full">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 text-center">{title}</h3>
        <p className="text-sm text-gray-400 text-center py-2.5">{date}</p>
        <p className="text-sm text-white flex-1 text-center">{description}</p>
      </div>
    </div>
  );
}

export default TecorengInsightCard;
