import Badge from "./Badge";

import { asPrice } from "../utils/format";

const Meal = ({ meal, addToCart }) => {
  const handleClick = () => {
    addToCart(meal.id, meal.title, Number(meal.price));
  };

  return (
    <article className="meal" onClick={handleClick}>
      <div className="meal-text">
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <p>
          <span className="price">{asPrice(Number(meal.price))}</span>
          {meal.popular && <Badge />}
        </p>
      </div>

      {meal.picture && <img src={meal.picture} alt={`${meal.title}`} />}
    </article>
  );
};

export default Meal;
