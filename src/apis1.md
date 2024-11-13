   ROUGH PAGE OF PARENT-CHILD--not used in real time project just for understanding
   
   //Add or Remove Favourites Dynamically using React for particular ACTION
    function handleFav(data){
      let tempData= products.map(product=>{
        if(product.id==data.id){
            if(data.is_fav==false){
            product.is_fav=true
        }else{
              product.is_fav=false
        }
       }
       return product
    }
    )
    setProducts(tempData)
}

 // Products list { products.length }
              {
                products.map(product=>(
                    //<h3>{product.title}</h3>
                    <div className="col-3">
                        <div className="card shadow">
                            <img src={product.thumbnail} className="card-img-top"/>
                            <div className="card-body">
                                <h3 className="card-title">{product.title}</h3>
                                <p className="card-text">
                                    {
                                        product.description

                                    }
                                </p>
                                
                            </div>
                            <div className="card-footer">
                            <button className="btn btn-primary" onClick={e=>handleFav(product)}><i className="bi bi-heart-fill"></i>
                            {
                                product.is_fav==true && <span>Remove</span>
                            }
                            {
                                product.is_fav==false && <span>Add</span>
                            }
                            </button>

                            </div>
                            </div>
                            </div>
                ))
              }