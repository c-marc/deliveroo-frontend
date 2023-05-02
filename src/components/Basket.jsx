import BasketItem from "./BasketItem";
import { asPrice } from "../utils/format";

const Basket = ({ basket, setBasket }) => {
  const subTotal = basket.reduce(
    (acc, b) => acc + Number(b.price) * b.quantity,
    0
  );
  const fees = 2.5;

  const handleQuantityChange = (id, delta) => {
    const newBasket = basket.map((b) => {
      return b.id === id ? { ...b, quantity: b.quantity + delta } : b;
    });
    setBasket(newBasket.filter((b) => b.quantity > 0));
  };

  const isEmpty = basket.length === 0;

  return (
    <div className="basket right-column">
      <button disabled={isEmpty}>Valider mon panier</button>

      {isEmpty ? (
        <p className="basket-empty">Votre panier est vide</p>
      ) : (
        <>
          <ul>
            {basket.map((b) => {
              return (
                <BasketItem
                  key={b.id}
                  item={b}
                  handleQuantityChange={handleQuantityChange}
                />
              );
            })}
          </ul>
          <hr />
          <div className="basket-line">
            <span>Sous-total</span>
            <span className="price">{asPrice(subTotal)}</span>
          </div>
          <div className="basket-line">
            <span>Frais de livraison</span>
            <span className="price">{asPrice(fees)}</span>
          </div>
          <hr />
          <div className="basket-line">
            <span>Total</span>
            <span className="price">{asPrice(subTotal + fees)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
