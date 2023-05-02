import Category from "./Category";

const Menu = ({ menu }) => {
  return (
    <div className="menu left-column">
      {menu.map((category) => {
        if (category.meals.length === 0) return null;
        return <Category key={category.name} category={category} />;
      })}
    </div>
  );
};

export default Menu;
