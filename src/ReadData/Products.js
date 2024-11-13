import Header from "../Shared/Header"
import Footer from "../Shared/Footer"
import axios from "axios"
import { useState } from "react"

function Products(){

    let[productData,setProductData]=useState({})
    console.log(Object.keys(productData))


//create function,variable
    let[usersData,setUsersData]=useState([])
    

    async function getSingleProductData(){
        let apiResponse=await axios.get("https://dummyjson.com/products/1")
        //console.log(apiResponse.data)
        setProductData(apiResponse.data)
        console.log(Object.keys(apiResponse.data))
        
    }
    //Api call-cheyale
    async function getUsersData() {
        let apiResponse=await axios.get('https://dummyjson.com/users')
        setUsersData(apiResponse.data)
    }

   return(
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Header/>
            </div>
        </div>

        <div className="row mt-5 mb-5">
            <div className="col-12">
                <button className="btn btn-primary"onClick={e=>getSingleProductData()}>Read Single Product Data</button>
                
            </div>
            <div className="col-12">
               {
                Object.keys(productData).length>0 &&
                <div>
                    <div>Discount: {productData.discountPercentage}</div>
               <div>Price: {productData.price}</div>
               <div>Rating: {productData.rating} <i className="bi bi-star"></i></div>

           
            <div>
                 {
                 productData.images.map(image=>(
                     <img src={image} className="mt-3" width="250"/>
                    ))
                      }
                        </div>
                    </div>
               }
                        </div>
        </div>
        <div className="row mt-5 mb-5">
            <div className="col-12">
                <button className="btn btn-success" onClick={e=>getUsersData()}>Get Users</button>
            </div>

          
        </div>
      


        <div className="row">
            <div className="col-12">
                <Footer/>
            </div>
        </div>


    </div>
   ) 
}
export default Products