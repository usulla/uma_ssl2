import Products from "../src/pages/Products/Products.jsx";
import App from "../src/components/App/App.jsx";
import appData from "../src/components/App/appData.json";

function ProductsPage() {
  const { dataProducts } = appData;
  return (
    <App>
      <Products dataProducts={dataProducts} />
    </App>
  );
}
export default ProductsPage;
