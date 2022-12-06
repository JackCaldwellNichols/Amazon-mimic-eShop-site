import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "../../styles/subtotal.css";
import { getBasketTotal } from "../Reducer";


const Subtotal = () => {
      const [{basket}, dispatch] = useStateValue();
	return (
      <div className="subtotal">
            <CurrencyFormat 
                  renderText={(value) => (
                        <>
                              <p>
                              Subtotal: ({basket.length} items): <strong>${value}</strong>
                              </p>
                              <span className="subtotal_gift">
                                    <input type = "checkbox" /> 
                                    This order contains a gift. 
                              </span>
                        </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
            />
            <button>Proceed to checkout</button>
      </div>
	);
};

export default Subtotal;