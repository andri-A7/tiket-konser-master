import ProductsAdminView from "@/components/views/admin/Products";
import productServices from "@/services/product";
import { useEffect, useState } from "react";

type PropTypes = {
  setToaster: any;
};

const AdminProductsPage = (props: PropTypes) => {
  const { setToaster } = props;
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    const { data } = await productServices.getAllProducts();
    setProducts(data.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <ProductsAdminView products={products} setToaster={setToaster} />
    </>
  );
};

export default AdminProductsPage;
