import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import EShop from './Elements/EShop'
import ProductList from './ProductList'

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
    id: 1,
    name: 'pants',
    price: 50
  },
  {
    id: 2,
    name: 'Tshirt',
    price: 30
  },
];


function App() {
  const [productList, setProductList] = useState(productsInit);
  const [cartList, setCartList] = useState(cartsInit);
  const [counter, setCounter] = useState(productsInit.length);


  buyItem = (id) => {
    console.log(id);
  }

  return (
    <div style={{ display: 'flex', border: '1px black solid', margin: 20, padding: 10 }}>

      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {EShop}
          <Cart cartList={cartList} />
        </div>

        <ProductList productList={productList} buyItem={buyItem} />
      </div >
    </div>

  )
}

export default App
