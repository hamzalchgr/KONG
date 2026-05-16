import Button from "../../../components/ui/Button";

const heroData = {
  heading: "Avatar: Fire and Ash",
  release: 2025,
  length: "3h 18min",
  rating: "4.7",

  tagline: "The world of Pandora will change forever.",
  overview:
    "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Na'vi tribe led by the ruthless Varang. Jake's family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits.",

  src: "https://image.tmdb.org/t/p/original/9QW8bQ0BK4GjtpHPuZvH6cfcBDS.jpg",
  logo: "https://image.tmdb.org/t/p/original/qzuSPiHF08bUZXPaXST24ANfoqK.png",
};

const Hero = () => {
  return (
    <section className="h-screen w-full pb-11 md:pb-0 relative">
      <div className="h-full w-full overflow-hidden">
        <img
          className="h-full w-full object-right object-cover"
          src={heroData.src}
          alt={heroData.heading}
          loading="eager"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-[calc(100%-44px)] md:h-full bg-linear-to-r from-[#000000] to-transparent" />

      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end gap-4 md:gap-5 px-4 md:px-10 pb-16 md:pb-10">
        <div className="h-14 md:h-20 overflow-hidden">
          <img
            className="h-full object-center object-cover"
            src={heroData.logo}
            alt={heroData.heading}
            loading="lazy"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold">
          {heroData.heading}
        </h1>

        <div className="flex items-center gap-2.5 text-gray-99 text-sm tracking-normal">
          <i
            className="ri-star-fill text-lg text-primary"
            aria-hidden="true"
          ></i>
          <p>{heroData.rating}</p>
          <p>{heroData.release}</p>
          <p>{heroData.length}</p>
        </div>

        <p className="hidden md:line-clamp-2 max-w-xl">{heroData.overview}</p>

        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Button>
            <i className="ri-play-fill" aria-hidden="true"></i>
            <span>Watch Trailer</span>
          </Button>

          <p className="text-primary tracking-normal">{heroData.tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
