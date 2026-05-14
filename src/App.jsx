import { Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home"
// import Category from "./pages/category/Category"
// import Movie from "./pages/Movie/Movie"
// import Show from "./pages/TV/Show"

import Layout from "./components/layout/Layout"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/category" element={<Category />} />
        <Route path="/show" element={<Show />} />
        <Route path="/movie" element={<Movie />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App