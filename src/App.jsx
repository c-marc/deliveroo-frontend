import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (id, title, price) => {
    const newCart = [...cart];
    if (newCart.some((item) => item.id === id)) {
      newCart.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity++ } : item;
      });
    } else {
      newCart.push({ id, title, price, quantity: 1 });
    }
    setCart(newCart);
  };

  return (
    <div className="app">
      <Header>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Restaurant restaurant={data.restaurant} />
        )}
      </Header>

      <main className="container columns">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Menu menu={data.categories} addToCart={addToCart} />
        )}

        <Cart cart={cart} setCart={setCart} />
      </main>
    </div>
  );
};

export default App;
