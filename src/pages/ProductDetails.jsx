import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductDetails.module.css";
import { addToCart } from "../redux/features";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  const {
    status,
    cartData,
    detailedProduct: item,
  } = useSelector((state) => state.ApiData);
  const isInCart = cartData.some((cartItem) => cartItem.item.id === item.id);
  const [hide, setHide] = useState(!isInCart);

  const dispatch = useDispatch();
  const handleaddToCart = (item) => {
    dispatch(addToCart(item));
    setHide(false);
  };

  const {
    availabilityStatus,
    brand,
    description,
    discountPercentage,
    images,
    price,
    rating,
    returnPolicy,
    reviews = [],
    stock,
    tags = [],
    title,
    warrantyInformation,
    weight,
    shippingInformation,
  } = item;
  // const item = useSelector((state) => state.ApiData.detailedProduct);

  if (status === "pending") {
    return <p className={styles.Loading}>Loading...</p>;
  }

  if (status === "error") {
    return <p className={styles.Loading}>Error...</p>;
  }

  return (
    <div className={styles.detailedItemDetailsContainer}>
      <div className={styles.firstContainer}>
        <h1 className={styles.titleOne}>{title}</h1>
        <div className={styles.detailedItemImage}>
          <img src={images} alt={title} />
          <div>
            <button>Buy Now</button>
            {hide ? (
              <button
                onClick={() => {
                  handleaddToCart({ item, quantity: 1 }), setHide(false);
                }}
              >
                Add To Cart
              </button>
            ) : (
              <button>
                <Link to="/cart" className={styles.msg}>
                  Go To Cart
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <h1 className={styles.titleTwo}>{title}</h1>
        <div className={styles.productGetByIdInfo}>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Brand:</strong> {brand}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Discount:</strong> {discountPercentage}%
          </p>
          <p>
            <strong>Availability:</strong> {availabilityStatus}
          </p>
          <p>
            <strong>Shipping Information:</strong> {shippingInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {returnPolicy}
          </p>
          <p>
            <strong>Warranty:</strong> {warrantyInformation}
          </p>
          <p>
            <strong>Stock:</strong> {stock}
          </p>
          <p>
            <strong>Weight:</strong> {weight} kg
          </p>
        </div>
        <div className={styles.productGetByIdTags}>
          <strong>Tags: </strong>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}{" "}
            </span>
          ))}
        </div>
        <div className={styles.productGetByIdReviews}>
          <h2>Reviews:</h2>
          {reviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <p>
                <strong>Rating:</strong> {rating}
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
