import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchProductById } from "../redux/features";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const {data, status} = useSelector((state) => state.ApiData);

  const getProductById = (id) => {
    dispatch(fetchProductById(id))
  }

  if(status === "pending") {
    return <p className={styles.Loading}>Loading...</p>
  }
  
  if(status === "error") {
    return <p className={styles.Loading}>Error...</p>
  }

  return (
    <div className={styles.DataContainer}>
      {data.map((item) => {
        return (
          <Link
            to="/product-details"
            key={item.id}
            className={styles.ItemContainer}
            onClick={() => getProductById(item.id)}
          >
            <div className={styles.ImageContainer}>
              <img src={item.thumbnail} alt="Image not available" />
            </div>
            <p>{item.title}</p>
            <p>{item.price.toFixed(2)}$</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
