import axios from "axios";
import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Search } from "./Search";
import {Shimmer} from "./Shimmer";

export const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState([])
    const [restaurantOriginalList, setRestaurantOriginalList] = useState([])
    const [searchText, setSearchText] = useState("")
    const displayTopRatedRestaurants =async()=>{
        if(searchText.length){
            const aa = restaurantOriginalList.filter(res=>{
                console.log('1-------', res.info.name)
                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setRestaurantList(aa)
        }
        else {
            const aa = restaurantOriginalList.filter(res=>res?.info?.avgRating>=4.5)
            setRestaurantList(aa)
        }
    }

    const fetchRestaurantData=async()=>{
        const data = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const restaurantData = data?.data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurantData||[])
        setRestaurantOriginalList(restaurantData||[])
    }
    useEffect(()=>{
        fetchRestaurantData();
    }, [])


    if(restaurantList.length===0){
        return <Shimmer>Loading</Shimmer>
    }
    return (
        <div className="body">
            <Search displayTopRatedRestaurants={displayTopRatedRestaurants} setSearchText={setSearchText} searchText={searchText}/>
            <div className="res-container">
                {(restaurantList).map((res, index)=><RestaurantCard resData={res.info} key={index}/>)}
            </div>
        </div>
    )
}