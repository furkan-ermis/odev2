import ProductList from "../Components/ProductList";
import Slider from "../Components/Slider";
function Main({ productList, GetProducts, addToCart, changeToWish }) {
  return (
    <>
      <Slider />
      <br />
      <br />
      <ProductList
        productList={productList}
        GetProducts={GetProducts}
        addToCart={addToCart}
        changeToWish={changeToWish}
      />
    </>
  );
}

export default Main;
