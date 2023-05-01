import Meal from "./Meal";

const Category = ({ category }) => {
  return (
    <section className="category">
      <h2>{category.name}</h2>

      <div className="meals">
        {category.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </section>
  );
};

export default Category;
