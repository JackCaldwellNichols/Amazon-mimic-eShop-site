import React from "react";
import { useStateValue } from "../StateProvider.js";
import "../../styles/checkout_product.css";



const CheckoutProduct = ({id, title, price, rating, image}) => {
    const [{basket}, dispatch] = useStateValue(); 
    
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

	return (
        <div className="checkout_product" id={id}>
            <img className="img checkout_product_image" src={image}/>
            <div className="checkout_product_info">
                     <p className="checkout_product_title"><strong>{title}</strong></p>
                     <p className="checkout_price">
                        <small>$</small>
                        <strong>{price}</strong>
                     </p>
                     <div className="checkout_product_rating" >
                        {Array(rating).fill().map((items) => <p>⭐</p>)}
                     </div>
                     <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
	);
};

export default CheckoutProduct;
