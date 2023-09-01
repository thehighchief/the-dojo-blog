import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom"

import NavBar from "./layouts/NavBar"
import Home from "./pages/Home"
import NewBlog from "./pages/NewBlog"
import BlogDetails from "./layouts/BlogDetails"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<NavBar/>}>
      
      <Route index element = {<Home />} />
      <Route path = "newblog" element = {<NewBlog />} />
      <Route path = "/api/blogs/:id" element = {<BlogDetails />} />
      <Route path ="*" element={<NotFound />} />
    </Route>
  )
)



const App =() => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
