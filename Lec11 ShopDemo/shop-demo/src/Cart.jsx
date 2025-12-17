import CartItem from "./CartItem";

import Fab from '@mui/material/Fab';
import PaymentIcon from '@mui/icons-material/Payment';


export default function Cart({ cartList, removeFromCart, pay }) {

  let total = 0;

  const rfc = (uuid) => {
    removeFromCart(uuid);
  }

  let cartsStr = cartList.map(cart => {
    total += cart.price;
    return <CartItem key={cart.uuid} cart={cart} rfc2={rfc} />
  });

  return (
    <div style={{ border: '1px black solid', margin: 20, padding: 10, width: '30%' }}>
      Cart: <br />
      {cartsStr} <br />
      <hr />
      Total = {total}$ <br />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Fab
          onClick={() => pay()}
          color="success" aria-label="edit" >
          <PaymentIcon />
        </Fab>
      </div>
    </div>
  )
}
