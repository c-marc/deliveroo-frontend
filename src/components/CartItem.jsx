import { asPrice } from "../utils/format";

const CartItem = ({ item, handleQuantityChange }) => {
  const total = item.price * item.quantity;
  return (
    <li className="cart-item cart-line">
      <div className="cart-item-controls">
        <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
      </div>

      <p className="cart-item-text">{item.title}</p>

      <p className="price">{asPrice(total)}</p>
    </li>
  );
};

export default CartItem;
