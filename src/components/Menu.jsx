import Category from "./Category";

const Menu = ({ menu }) => {
  return (
    <div className="menu left-column">
      {menu.map((category) => {
        return <Category key={category.name} category={category} />;
      })}
    </div>
  );
};

export default Menu;
