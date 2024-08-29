import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  //Defining a State Variable to filter the Restraunt Objects whose rating is above 4.5 using a button.
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  // const listOfRestaurants = resObj

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional Rendering-- redering page on basis of conditions.
  // if(listOfRestaurants.length === 0)
  // {
  //   return <Shimmer />
  // }

  //conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="topRatedRestaurants"
          onClick={() => {
            const FilteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(FilteredData);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="serach">
          <input
            type="text"
            className="serach-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const FilteredData = listOfRestaurants.filter((res) =>
                res?.info?.name.includes(searchText)
              );
              setFilteredRestaurants(FilteredData);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
