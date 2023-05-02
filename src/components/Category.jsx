import Meal from "./Meal";

const Category = ({ category, addToCart }) => {
  return (
    <section className="category">
      <h2>{category.name}</h2>

      <div className="meals">
        {category.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} addToCart={addToCart} />;
        })}
      </div>
    </section>
  );
};

export default Category;
