import React from "react";
import { useStateValue } from "../StateProvider.js";

import "../../styles/product.css";

const Product = ({id, title, image, price, rating}) => {

    const[state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating
            },
        })
    }


	return (
			<div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price"><small>$</small>{price}</p>
                    <div className="product_rating">{Array(rating).fill().map((items) => <p>⭐</p>)}</div>
                </div>
                <img src={image}/>
                <button onClick={addToBasket}>Add to basket</button>
            </div>
	);
};

export default Product;