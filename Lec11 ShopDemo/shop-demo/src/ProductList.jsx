import ProductItem from "./ProductItem";


export default function ProductList({ productList, buyItem }) {

  //let {productList} = props;

  let productsStr = productList.map(prod =>
    <ProductItem key={prod.id} prod={prod} buyItem={buyItem}/>
  );

  return (
    <div style={{
      border: '1px black solid', margin: 20, padding: 10,
      display: 'flex', flexDirection: 'row'
    }}>
      ProductList: <br />
      {productsStr}
    </div>
  )
}
