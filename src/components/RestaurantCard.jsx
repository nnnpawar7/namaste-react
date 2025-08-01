import {CDN_IMAGE_URL} from "../utils/contants"
export const RestaurantCard = ({resData})=>{
    const { avgRatingString, name, cloudinaryImageId, cuisines, sla:{slaString}} = resData;
    return (
        <div className="res-card">
            <img className="res-thumb-image" src={`${CDN_IMAGE_URL}/${cloudinaryImageId}`} alt="" />
            <h3>{name}</h3>
            <h4>{avgRatingString} Stars</h4>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{slaString}</h4>
            <h4>{slaString}</h4>
        </div>
    )
}