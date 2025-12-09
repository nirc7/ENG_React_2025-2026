import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';



export default function CartItem(props) {
  let { id, name, price } = props.cart;

  return (
    <div>{name} {price}$
      <IconButton color="error" aria-label="add to shopping cart">
        <RemoveShoppingCart />
      </IconButton>
      <Divider />
    </div>
  )
}
