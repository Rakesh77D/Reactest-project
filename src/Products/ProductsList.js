import { useEffect, useState } from "react"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import axios from "axios"
import Product from "./Product"

function ProductsList(){

    let [products,setProducts]=useState([])

    let [noOfCartItems,setNoOfcartItems]=useState(0)
    
//child to parent component:

    function updateCart(){
        setNoOfcartItems(noOfCartItems+1)
    }

    function removeCart(){
        setNoOfcartItems(noOfCartItems-1)
    }
    //var a=10
    //var a=10
    //let b=10
    //let b=10

 //GET data from api (or) call api get data\

useEffect( ()=>{

 async function getProductsList(){
    
    let apiResponse=await axios.get("https://dummyjson.com/products")
    let data=apiResponse.data.products.map(product=>{
        product.is_fav=false
        return product

    })
    setProducts(data)
    console.log(data)

    //console.log(apiResponse.data.products)
 }
 getProductsList()

    },[])
    
  
    return(
        <div className="container">
        <div className="row">
            <div className="col-12">
           <Header/>

            </div>
            </div>

            <div className="row mt-5 mb-5">
            <div className="col-12">
                    <h4>Cart:{noOfCartItems} items</h4>
                </div>
                
                {
                    products.map(product=>(
                        <Product product={product} updateCart={updateCart} removeCart={removeCart}/>
                    ))
                }
            

            </div>
            <div className="row">
                <Footer/>

            </div>
        </div>
    )
}

export default ProductsList