import Form from "./Form"
function Home(){

    var userId=console.log(localStorage.getItem("loggedInUserId"))
   // console.log(localStorage.getItem("rakesh"))

   function handleLogOut(){
    localStorage.clear()
    window.location.reload()
   }
    return(

        <div>
            <div>
                <h3>Coding is easy and fun</h3>
              
                {
                  userId==null && <div><a href="/create-account">Signup</a><a href="/signin">Login</a></div>
                }

                {
                  userId!=null && <div> <button className="btn" onClick={e=>handleLogOut}>Logout</button></div>
                }
                
            </div>
           
        </div>
    )
}

export default Home