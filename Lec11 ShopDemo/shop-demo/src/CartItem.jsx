import Divider from '@mui/material/Divider';
import MUIIconButton from '@mui/material/IconButton';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart';



export default function CartItem(props) {
  let { uuid, name, price } = props.cart;

  return (
    <div>{name} {price}$
      <MUIIconButton
        onClick={() => props.rfc2(uuid)}
        color="error" aria-label="add to shopping cart">
        <RemoveShoppingCart />
      </MUIIconButton>
      <Divider />
    </div>
  )
}
