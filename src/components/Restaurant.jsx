const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant container columns">
      <div className="column-left">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>
      </div>
      <div className="column-right">
        <img src={restaurant.picture} alt="TODO" />
      </div>
    </div>
  );
};

export default Restaurant;
