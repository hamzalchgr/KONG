import Hero from "./sections/Hero";
import MediaSlider from "./sections/MediaSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <MediaSlider h2="Popular Movies" mediaType="movie" list="popular" />
      <MediaSlider h2="Popular TV Shows" mediaType="tv" list="popular" />
    </div>
  );
};

export default Home;
