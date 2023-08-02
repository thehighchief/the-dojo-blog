import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from "react-router-dom"

import NavBar from "./layouts/NavBar"
import Home from "./pages/Home"
import NewBlog from "./pages/NewBlog"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<NavBar/>}>
      <Route index element = {<Home />} />
      <Route path = "newblog" element = {<NewBlog />} />
    </Route>
  )
)



const App =() => {

  return (
    <RouterProvider router={router} />
  )
}

export default App
