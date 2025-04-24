import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,Outlet } from "react-router";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Error from "./Components/Error.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import { lazy,Suspense } from "react";
// import Grocery from "./Components/Grocery.jsx";

const Grocery=lazy(() => import("./Components/Grocery.jsx"));
// chunking 
// code splitting
// dynamic bundling
// lazy loading
// on demand loading






function App() {
 

  return (
    <div>

   
    <Header/>
    <Outlet/>
  
    </div>
  
  )
}

export default App;


 export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      
    
      }
      ,{
      path:"contact",
      element:<Contact/>,
    
  
    },
    {
      path:"about",
      element:<About/>,
    },{
      path:"/grocery",
     element:<Suspense fallback={<h1>lazy loading</h1>}><Grocery/></Suspense>
    },{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
  
  
    }],
    errorElement:<Error/>,

  },
  
  
  

]);
