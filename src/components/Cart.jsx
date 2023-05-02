import CartItem from "./CartItem";
import { asPrice } from "../utils/format";

const Cart = ({ cart, setCart }) => {
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const fees = 2.5;

  const handleQuantityChange = (id, delta) => {
    const newCart = cart.map((item) => {
      return item.id === id
        ? { ...item, quantity: item.quantity + delta }
        : item;
    });
    setCart(newCart.filter((item) => item.quantity > 0));
  };

  // helper
  const isEmpty = cart.length === 0;

  return (
    <div className="cart column-right">
      <button disabled={isEmpty}>Valider mon panier</button>

      {isEmpty ? (
        <p className="cart-empty">Votre panier est vide</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  handleQuantityChange={handleQuantityChange}
                />
              );
            })}
          </ul>
          <hr />
          <div className="cart-line">
            <span>Sous-total</span>
            <span className="price">{asPrice(subTotal)}</span>
          </div>
          <div className="cart-line">
            <span>Frais de livraison</span>
            <span className="price">{asPrice(fees)}</span>
          </div>
          <hr />
          <div className="cart-line">
            <span>Total</span>
            <span className="price">{asPrice(subTotal + fees)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
