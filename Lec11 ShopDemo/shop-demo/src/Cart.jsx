import CartItem from "./CartItem";

export default function Cart({ cartList }) {


  let cartsStr = cartList.map(cart =>
    <CartItem key={cart.uuid} cart={cart} />
  );

  return (
    <div style={{ border: '1px black solid', margin: 20, padding: 10, width: '30%' }}>
      Cart: <br />
      {cartsStr}
    </div>
  )
}
