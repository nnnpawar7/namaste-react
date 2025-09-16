import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
export const RestaurantMenu = ()=>{
    const [menus, setMenus] = useState([]);

    const params = useParams()
    const fetchMenu = async()=>{
        const data = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`)
        console.log('1--------------',data.data)
        console.log(data.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setMenus(data?.data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ||[])
    }
    useEffect(()=>{
        fetchMenu()
    },[])

    return (<div>
        {menus.map((menu)=>{
            return (
                <h1 key={menu.card.info.id}>{menu.card.info.name|| "00"}</h1>
            )
        })}  
    </div>)
}