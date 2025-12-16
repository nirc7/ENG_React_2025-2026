import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProductItem(props) {

  let { id, name, price, quantity, imgSrc } = props.prod;

  return (
    <div style={{ width: 200, margin: 20 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imgSrc}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1" color="success" >
            {price}$ <br />
          </Typography>
          <Typography variant="body2" color="warning" >
            {quantity}#
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={()=> props.buyItem(id)} >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>


    </div >
  )
}
