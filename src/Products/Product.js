function Product({product,updateCart,removeCart}){
    
    console.log(product)

    function addToCart(){
        updateCart()

    }

    function removeCartItem(){
        removeCart()
    }


    return (
        <div className="col-3">
            <div className="card shadow">
                <img src={product.thumbnail} className="card-image"/>
                <div className="card-body">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>

                    <div>
                    <i className="bi bi-currency-rupee"></i>{product.price}
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={e=>addToCart()}>Add to Cart</button>
                    <button className="btn btn-danger" onClick={e=>removeCartItem()}>Remove</button>
                </div>
            </div>
           
        </div>
    )
}

export default Product