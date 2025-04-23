import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,Outlet } from "react-router";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Error from "./Components/Error.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";




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
    }],
    errorElement:<Error/>,

  },{
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>,


  }
  
  
  

]);
