import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Defining a State Variable to filter the Restraunt Objects whose rating is above 4.5 using a button.
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  // const listOfRestaurants = resObj
  return (
    <div className="body">
      <div className="filter">
        <button
          className="topRatedRestaurants"
          onClick={() => {
            const FilteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(FilteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
