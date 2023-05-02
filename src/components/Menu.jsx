import Category from "./Category";

const Menu = ({ menu, addToCart }) => {
  return (
    <div className="menu column-left">
      {menu.map((category) => {
        if (category.meals.length === 0) return null;
        return (
          <Category
            key={category.name}
            category={category}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
};

export default Menu;
