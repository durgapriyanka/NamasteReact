import { ITEM_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cloudinaryImageId , costForTwo, cuisines, avgRating, sla}  = resData?.info
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="card-image"
          alt="res-logo"
          src={ ITEM_URL + cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4 className="cuisines">{cuisines.join(',')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;