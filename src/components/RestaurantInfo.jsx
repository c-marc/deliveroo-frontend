const RestaurantInfos = ({ restaurant }) => {
  return (
    <div className="restaurant-infos container columns">
      <div className="left-column">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
      </div>
      <div className="right-column">
        <img src={restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default RestaurantInfos;
