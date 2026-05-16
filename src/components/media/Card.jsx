import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({
  media: {
    id,
    title,
    name,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
  },
  mediaType,
}) => {
  return (
    <Link to={`/${mediaType}/${id}`}>
      <div className="h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-center object-cover"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title || name}
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-1 pt-2">
        <p className="text-base font-medium line-clamp-1">{title || name}</p>

        <div className="flex items-center justify-between text-sm text-gray-99">
          <span className="flex items-center gap-1">
            <Star size={16} fill="#ff0000" strokeWidth={0} />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </span>
          <p>{(first_air_date || release_date)?.split("-")[0] || "N/A"}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
