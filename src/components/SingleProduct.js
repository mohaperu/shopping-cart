import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
// import Rating from "./Rating";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";


const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [rating, setRating] = useState(0) // initial rating value

  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleReset = () => {
    setRating(2.5)
  }

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}

            {/* <Rating rating={prod.ratings} /> */}
            <Rating
              size="20px"
              ratingValue={rating}
              onClick={handleRating}
              initialValue={2.5}
            />

          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;