import { useState } from "react"
import { validateEmail } from "../Utils/utils"
import axios from "axios"

function Login(){
    var[userEmail,setEmail]=useState("")
    var[pword,setPword]=useState("")

    var [emailError,setEmailError]=useState("")
    var[pwordError,setPwordError]=useState("")

    var[apiErrorMsg,setApiErrorMsg]=useState("")
    var[apiSuccessMsg,setApiSuccessMsg]=useState("")

    function handleEmailChange(event){
        setEmail(event.target.value)
        

    }
    function handlePwordChange(e){
        setPword(e.target.value)
    }

async function handleLogin(){
        var noOfErrors=0
        if (validateEmail(userEmail)){

            setEmailError("")

        }else{
            setEmailError("Email is not valid")
            noOfErrors++
        }
        if(pword.length>=8){
            setPwordError("")
          
        }else{
            setPwordError("Min 8 chars")
            noOfErrors++
        }
        if(noOfErrors==0){
            console.log("No errors, call login api")
            var apiInputData={
                'email':userEmail, 'password':pword
            }
            //console.log(apiInputData)

            //fetch-API call
             /* 
            var fetchApiInput={
            headers:{
                'Content-type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(apiInputData)
        }
            
            var apiResponse=await fetch("https://api.softwareschool.co/auth/login", fetchApiInput)
                console.log('apiResponse: ', apiResponse)
            if(apiResponse.ok==true){
                var apiData=await apiResponse.json()
                console.log('apiData: ', apiData)
                if(apiData.result=="SUCCESS"){
                    setApiSuccessMsg(apiData.message)
                    setApiErrorMsg("")
                }else{
                    setApiErrorMsg(apiData.message)
                    setApiSuccessMsg("")
                    console.log(apiResponse)
                
                    
               
                    //setApiErrorMsg(apiData.status + "error")
                
                }
            
                }
                //Axios-API Call
              */
                try{
            var apiResponse= await axios.post("https://api.softwareschool.co/auth/login",apiInputData)
            console.log(apiResponse)
            if(apiResponse.data.result=="SUCCESS"){
                setApiSuccessMsg(apiResponse.data.message)
                setApiErrorMsg("")
                console.log(apiResponse.data.data.userId)
                localStorage.setItem('loggedInUserId', apiResponse.data.data.userId)
                window.location='/'

            }else{
                setApiErrorMsg(apiResponse.data.message)
                setApiSuccessMsg("")
            }
            
            
            }catch(ex){
                //console.log(ex)
                setApiErrorMsg(ex.message)
                setApiSuccessMsg("")

            }
        
               
        
}
             
}

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Login</h3>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={event=>handleEmailChange(event)}  className="form-control" placeholder="Email"/>
                        <div className="text-danger">{emailError}</div>
                        
                    </div>
                    
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="Password" onChange={e=>handlePwordChange(e)} className="form-control" placeholder="Password"/>
                        <div className="text-danger">{pwordError}</div>
                    </div>

                    <div>
                    <button className="btn btn-warning" onClick={e=>handleLogin(e)}>Login</button> 
                    </div>

                    
                    <div className="mt-3">
                        <div className="alert alert-danger">
                            {apiErrorMsg}

                        </div>
                        <div className="alert alert-success">
                            {apiSuccessMsg}

                        </div>



                    </div>
                    
                    </div>
                    </div>


</div>





    )
}

export default Login