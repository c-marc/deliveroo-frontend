import Badge from "./Badge";

const Meal = ({ meal, addToBasket }) => {
  const handleClick = () => {
    addToBasket(meal.id, meal.title, meal.price);
  };

  return (
    <article className="meal" onClick={handleClick}>
      <div className="meal-text">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <div>
          <span className="price">{meal.price} €</span>
          {meal.popular && <Badge />}
        </div>
      </div>

      {meal.picture && <img src={meal.picture} alt={`${meal.title}`} />}
    </article>
  );
};

export default Meal;
