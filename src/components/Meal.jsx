import Badge from "./Badge";

const Meal = ({ meal }) => {
  return (
    <div className="meal">
      <div className="meal-text">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <div>
          <span className="price">{meal.price} €</span>
          {meal.popular && <Badge />}
        </div>
      </div>

      {meal.picture && <img src={meal.picture} alt={`${meal.title}`} />}
    </div>
  );
};

export default Meal;
