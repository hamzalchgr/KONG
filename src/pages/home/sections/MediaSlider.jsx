import { Link } from "react-router-dom";

import CardLink from "../../../components/media/Card";
import { useEffect, useState } from "react";
import Spinner from "../../../components/ui/Spinner";

import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const MediaSlider = ({ h2, mediaType, list }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [slideIndex, setSlideIndex] = useState(0);

  const getMedia = async (signal) => {
    try {
      const endPoint = `${API_BASE_URL}/${mediaType}/${list}?language=en-US&page=1`;

      setErrorMessage("");
      setIsLoading(true);

      const res = await fetch(endPoint, API_OPTIONS, { signal });
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await res.json();
      if (result.ressponse === false) {
        setErrorMessage(result.Error || "Failed to fetch data");
        setMediaList([]);
        return;
      }

      setMediaList(result.results);
    } catch (error) {
      if (error.message !== "AbortError") {
        setErrorMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getMedia(controller.signal);

    return () => controller.abort();
  }, []);
  return (
    <section className="relative py-7.5 flex flex-col gap-8 tracking-normal">
      <div className="px-4 md:px-10 h-10 flex items-end gap-2.5">
        <h2 className="text-lg lg:text-2xl font-medium">{h2}</h2>
        <Link
          to={`/category/${mediaType}`}
          className="text-primary text-xs leading-6 font-medium"
        >
          Explore All
        </Link>
      </div>

        <div className="absolute z-50 top-7.5 right-4 md:right-10 flex gap-2">
          <button
            aria-label="Go to previous slide"
            className={clsx(
              "w-10 h-10 rounded-full bg-[#10101090] hover:bg-black transition flex-center",
              slideIndex === 0 ? "hidden" : "md:flex-center",
            )}
            onClick={() => setSlideIndex((prev) => prev - 1)}
          >
            <ArrowLeft size={20} />
          </button>

          <button
            aria-label="Go to next slide"
            className={clsx(
              "w-10 h-10 rounded-full bg-[#10101090] hover:bg-black transition flex-center",
              slideIndex === mediaList.length / 5 - 1 
                ? "hidden"
                : "md:flex-center",
            )}
            onClick={() => setSlideIndex((prev) => prev + 1)}
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mx-4 md:mx-10 overflow-hidden">
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <ul
              style={{
                transform: `translateX(-${(slideIndex % 5) * 100}%)`
              }}
              className="h-full w-full flex transition-300"
            >
              {mediaList.map((media) => (
                <li
                  key={media.id}
                  className="flex-none w-1/3 md:w-1/4 lg:w-1/5 h-fit cursor-pointer px-1 md:px-2"
                >
                  <CardLink media={media} mediaType={mediaType} />
                </li>
              ))}
              <li className="flex-none w-1/3 md:w-1/4 lg:w1/5 h-fit">cc</li>
            </ul>
          )}
        </div>
    </section>
  );
};

export default MediaSlider;
