import Body from "./Body";
import Header from "./Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import VideoCard from "./VideoCard";

const App =()=>{
  return(
   <div className=" bg-slate-200">
    <Header />
    <Outlet/>
   </div>
  )
}

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'player',
        element:<VideoCard/>
      }
    ]
  }
])

const AppLayout = ()=>{
  return(
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default AppLayout;