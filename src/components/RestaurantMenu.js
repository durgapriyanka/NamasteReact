import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/userRestaurantMenu";

const RestaurantMenu = () => {

  //  Ambika - 714370, 496680
  const {resId} = useParams();
  //below useRestaurantMenu is the custom hook defined under utils folder. Responsible in fetching rest menu
  const restaurantMenu = useRestaurantMenu(resId);

  if(restaurantMenu === null) {
    return <Shimmer />
  } 

  const { name, cuisines, costForTwoMessage } = restaurantMenu.cards[2].card.card.info
  const { itemCards } =restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
       

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(',') }  -  {costForTwoMessage}</h3>
      <ul>
      {
        itemCards.map(item => (
          <li key={item.card.info.id}>{item.card.info.name} - RS. {item.card.info.price/100}</li>
        ))
      }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
