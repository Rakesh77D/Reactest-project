import { useState } from "react"
import Footer from "./Shared/Footer"
import Header from "./Shared/Header"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./store/counter"

function DataTest(){
/*
    let [counter,setCounter]=useState(0)
     //number -> state
*/

let counter=useSelector(state=>state.counter)
let dispatch= useDispatch()

function handleIncrement(){
    dispatch(increment(""))
}
function handleDecrement(){
    dispatch(decrement(""))
}

    return(
        <div className="container">
        <div className="row">
            
           <Header />

            </div>
            

            <div className="row mt-5 mb-5">
            <div className="col-12">
                 <h4>Counter</h4>
                 <h3>{counter}</h3>
                 <button className="btn btn-success me-2" onClick={e=>handleIncrement()}>+</button>
                 <button className="btn btn-danger" onClick={e=>handleDecrement()}>-</button>
                 
             
                 </div>
                </div>
                
              

            
            <div className="row">
                <Footer/>

            </div>
        </div>
    )
}

    
export default DataTest
