import { Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
// import Category from "./pages/category/Category"
import Movie from "./pages/movie/Movies"


import Layout from "./components/layout/Layout"
import TvShows from "./pages/tv/TvShows"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/show" element={<TvShows />} />
        {/* <Route path="/category" element={<Category />} />
         />
         */}
        </Route>
      </Routes>
    </div>
  )
}

export default App