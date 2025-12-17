import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import EShop from './Elements/EShop'
import ProductList from './ProductList';

import { v4 as uuidv4 } from 'uuid';

const productsInit = [
  {
    id: 1,
    name: 'pants',
    quantity: 10,
    imgSrc: 'https://ainker.com/cdn/shop/files/BEDE1958-519C-464A-8F91-00D27FC31A78.jpg?v=1753302650',
    price: 50
  },
  {
    id: 2,
    name: 'Tshirt',
    quantity: 10,
    imgSrc: 'https://ainker.com/cdn/shop/files/250810-145656_jpgbest.jpg?v=1754994609',
    price: 30
  },
  {
    id: 3,
    name: 'hat',
    quantity: 10,
    imgSrc: 'https://www.gant.co.il/wp-content/uploads/9901290-255-flat-fv-1.jpg.jpg',
    price: 20
  }];

const cartsInit = [
  {
    uuid: 1,
    id: 1,
    name: 'pants',
    price: 50
  },
  {
    uuid: 2,
    id: 2,
    name: 'Tshirt',
    price: 30
  },
];


function App() {
  const [productList, setProductList] = useState(productsInit);
  const [cartList, setCartList] = useState(cartsInit);
  const [counter, setCounter] = useState(productsInit.length);

  const pay = () => {
    setCartList([]);
  }

  const removeFromCart = (uuid) => {
    console.log(uuid);
    let cart2Find = cartList.find(cart => cart.uuid === uuid);

    let prod2Find = productList.find(prod => prod.id === cart2Find.id);
    prod2Find.quantity++;
    setProductList(productList);

    let newCartList = cartList.filter(cart => cart.uuid !== uuid);
    setCartList(newCartList);
  }

  const buyItem = (id) => {

    let product2Find = productList.find(prod => prod.id === id);

    let newCartItem = {
      uuid: uuidv4(),
      id: product2Find.id,
      name: product2Find.name,
      price: product2Find.price
    }
    let newCartList = [...cartList, newCartItem];
    setCartList(newCartList);

    product2Find.quantity--;
    setProductList(productList);
  }

  return (
    <div style={{ display: 'flex', border: '1px black solid', margin: 20, padding: 10 }}>

      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {EShop}
          <Cart cartList={cartList} removeFromCart={removeFromCart} pay={pay} />
        </div>

        <ProductList productList={productList} buyItem={buyItem} />
      </div >
    </div>

  )
}

export default App
