const CartSummary = ({ totalNumItems }) => {
    return (
        <section className="checkout-container p-2 flex-col flex-align-center flex-justify-start">
            <h4 className="section-head pb-1 text-center">
                Price Details
            </h4>
            <article className="payment-details">
                <div className="flex-col py-1-5">
                    <div className="flex-row total-price flex-justify-between flex-align-center py-0-25">
                        <p className="text-reg item-head">Price ({totalNumItems} items)</p>
                        <p className="text-reg item-content">₹ 798</p>
                    </div>
                    <div className="flex-row delivery-charges flex-justify-between flex-align-center py-0-25">
                        <p className="text-reg item-head">Delivery Charges</p>
                        <p className="text-reg item-content">- ₹ 49</p>
                    </div>
                </div>
                <div className="total-charges pt-1 flex-row flex-justify-between flex-align-center">
                    <p className="text-lg item-head">Subtotal</p>
                    <p className="text-lg item-content">₹ 647</p>
                </div>
                <div className="pb-0-5 pt-1">
                    <label htmlFor="checkbox-gift">
                        <input type="checkbox" name="input-checkbox" id="checkbox-gift" className="mr-0-25" />
                        This order contains a gift.
                    </label>
                </div>
                <button className="btn btn-full-width mt-1 text-lg py-0-25 px-0-5">
                    Place order 
                </button>                        
            </article>
        </section>
    )
}

export { CartSummary };
