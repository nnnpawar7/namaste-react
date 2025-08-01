export const Search = ({displayTopRatedRestaurants, searchText, setSearchText})=>{

    return(
        <div className="seach-container">
            <input onChange={(e)=>{setSearchText(e.target.value)}} value={searchText} name="search" type="text" />
            <button onClick={displayTopRatedRestaurants}>Search</button>
        <button onClick={()=>displayTopRatedRestaurants()}>Top Rated Restaurants</button>
        </div>
    )
}