import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import "./Cart.css";

function Cart() {
  let { currentUser } = useContext(userLoginContext);
  let [cartItems, setCartItems] = useState([]);

  async function getProductsOfUserCart() {
    let res = await fetch(
      `http://localhost:3000/user-cart?username=${currentUser.username}`
    );
    console.log(res);
    let cartItemsList = await res.json();
    setCartItems(cartItemsList);
  }

  useEffect(() => {
    getProductsOfUserCart();
  }, []);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="display-1 text-center text-danger">Cart is empty</p>
      ) : (
        <table className="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.id}</td>
                <td>{cartItem.title}</td>
                <td>{cartItem.price}</td>
                <td>{cartItem.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
