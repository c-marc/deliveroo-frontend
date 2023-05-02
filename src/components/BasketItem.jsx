import { asPrice } from "../utils/format";

const BasketItem = ({ item, handleQuantityChange }) => {
  const total = Number(item.price) * item.quantity;
  return (
    <li className="basket-item basket-line">
      <div className="controls">
        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
      </div>

      <span className="basket-item-title">{item.title}</span>

      <span className="price">{asPrice(total)}</span>
    </li>
  );
};

export default BasketItem;
