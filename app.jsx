import { lazy } from 'react';
import React, {Lazy, Suspense} from "react";
import { createRoot } from 'react-dom/client';
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import { About } from './src/components/About';
import {ContactUs} from "./src/components/ContactUs"
import {NotFound} from "./src/components/NotFound";
import {ErrorMessage} from "./src/components/ErrorMessage"
import {RestaurantMenu} from "./src/components/RestaurantMenu"
import {Users} from "./src/components/Users";
const GroceryComponent = lazy(() => import('./src/components/Grocery.jsx'));

const restaurants = [
  { rating: "5.0", cousine: "Sattvic Indian", name: "Krishna Prasad" },
  { rating: "5.0", cousine: "Sattvic South Indian", name: "Govindas" },
  { rating: "5.0", cousine: "International Sattvic (Thai, etc.)", name: "Heigher Taste" },
  { rating: "5.0", cousine: "Traditional Indian Thali", name: "Prasadalay" },
  { rating: "5.0", cousine: "Pure Vegetarian Maharashtrian", name: "Naivedyam" },
  { rating: "5.0", cousine: "North Indian Sattvic", name: "Rajbhog" },
  { rating: "5.0", cousine: "Continental & Indian Fusion", name: "Annapurna Bliss" },
  { rating: "5.0", cousine: "Gourmet Sattvic Meals", name: "Divine Delights" },
  { rating: "5.0", cousine: "Ayurvedic Balanced Meals", name: "Sattvic Feast" }
]

// const  = Lazy(() => import(""))

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/about",
                element: <About/>,
                errorElement:<Error/>
            }, {
                path:"/",
                element: <Body/>
            }, {
                path:"/contact",
                element: <ContactUs/>,
                errorElement: <ErrorMessage/>
            }, {
                path:"/user",
                element: <Users name="Nilesh"/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}> <GroceryComponent/></Suspense>
            }
        ]
    },
    {
        path:"/restaurant-menu/:id",
        element: <RestaurantMenu/>
    },
    {
        path:"/*",
        element: <NotFound/>
    }
])


const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);