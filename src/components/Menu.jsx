import Category from "./Category";

const Menu = ({ menu, addToBasket }) => {
  return (
    <div className="menu left-column">
      {menu.map((category) => {
        if (category.meals.length === 0) return null;
        return (
          <Category
            key={category.name}
            category={category}
            addToBasket={addToBasket}
          />
        );
      })}
    </div>
  );
};

export default Menu;
