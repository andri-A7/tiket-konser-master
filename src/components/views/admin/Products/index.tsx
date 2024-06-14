import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import styles from "./Products.module.scss";
import { Dispatch, useEffect, useState, SetStateAction } from "react";
import { User } from "@/types/user.type";
import Image from "next/image";
import { convertIDR } from "@/utils/currency";
import { Product } from "@/types/product.type";

type PropTypes = {
  products: Product[];
  setToaster: Dispatch<SetStateAction<{}>>;
};

const ProductsAdminView = (props: PropTypes) => {
  const { products, setToaster } = props;
  const [productsData, setProductsData] = useState<Product[]>([]);

  useEffect(() => {
    setProductsData(products);
  }, [products]);
  return (
    <>
      <AdminLayout>
        <div className={styles.products}>
          <h1>Products Management</h1>
          <table className={styles.products__table}>
            <thead>
              <tr>
                <th rowSpan={2}>#</th>
                <th rowSpan={2}>Image</th>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>Genre</th>
                <th rowSpan={2}>Region</th>
                <th colSpan={2}>Price</th>
                <th colSpan={2}>Stock</th>
                <th rowSpan={2}>Action</th>
              </tr>
              <tr>
                <th>Category</th>
                <th>IDR</th>
                <th>Category</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product, index) => (
                <>
                  <tr key={product.id}>
                    <td
                      rowSpan={product.prices.length && product.stocks.length}
                    >
                      {index + 1}
                    </td>
                    <td
                      rowSpan={product.prices.length && product.stocks.length}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={120}
                        className={styles.products__table__image}
                      />
                    </td>
                    <td
                      rowSpan={product.prices.length && product.stocks.length}
                    >
                      {product.name}
                    </td>
                    <td
                      rowSpan={product.prices.length && product.stocks.length}
                    >
                      {product.genres.map((genre: [], index: number) => (
                        <>
                          <p key={index}>{`${genre},`}</p>
                        </>
                      ))}
                    </td>
                    <td
                      rowSpan={product.prices.length && product.stocks.length}
                    >
                      {product.region}
                    </td>
                    <td>{product.prices[0].category}</td>
                    <td>{convertIDR(product.prices[0].idr)}</td>
                    <td>{product.stocks[0].category}</td>
                    <td>{product.stocks[0].qty}</td>
                    <td
                      rowSpan={product.prices.length && product.stocks.length}
                    >
                      <div className={styles.products__table__action}>
                        <Button
                          type="button"
                          className={styles.products__table__action__edit}
                        >
                          <i className="bx bx-edit"></i>
                        </Button>
                        <Button
                          type="button"
                          className={styles.products__table__action__delete}
                        >
                          <i className="bx bxs-trash"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                  {product.prices.map(
                    (
                      prices: { category: string; idr: number },
                      index: number
                    ) => (
                      <>
                        {index > 0 && product.stocks[index] && (
                          <tr key={`${prices.category}-${index}`}>
                            <td>{prices.category}</td>
                            <td>{convertIDR(prices.idr)}</td>
                            <td>{product.stocks[index].category}</td>
                            <td>{product.stocks[index].qty}</td>
                          </tr>
                        )}
                      </>
                    )
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </>
  );
};

export default ProductsAdminView;
