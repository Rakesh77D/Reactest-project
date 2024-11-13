import { useEffect, useState } from "react"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import axios from "axios"


function UsersList(){

    let [users,setUsers]=useState([])
    let [usersData,setUsersData]=useState([])

    let searchText=""
/*
    let a=[1,2,3]
    let b=[...a]
    console.log(a)
    console.log(b)
    b[0]=3
    console.log(a)
    console.log(b)
    */

        useEffect(()=>{

        async function getUsers(){
            let apiResponse=await axios.get('https://dummyjson.com/users')
            console.log(apiResponse.data.users)
            setUsers([...apiResponse.data.users])
            setUsersData([...apiResponse.data.users])


        }

        getUsers()

    },[])
    
    function handleSearchTextChange(e){
        searchText=e.target.value
        //console.log(searchText)
       let tempData= users.filter(user=>{
            let isContains= user.firstName.toLowerCase().includes(searchText.toLowerCase())
           // console.log(isContains)
            return isContains
    })
    setUsers([...tempData])
    }
function handleNameSort(){
    console.log(1)
   let tempData= users.sort((user1,user2)=>{
        if(user1.firstName.toLowerCase() < user2.firstName.toLowerCase()){
            return -1
        }else{
            return 1
        }
    })
    console.log(tempData)
    setUsers([...tempData])
}
  
async function handleDelete(user){
    console.log('handleDelete', user)
    let apiResponse=await axios.delete('https://dummyjson.com/users/'+user.id) 

    let tempData=users.filter(tempUser=>tempUser.id !=user.id)
    setUsers([...tempData])
    
      }

let [name,setName]=useState("")
let [email,setEmail]=useState("")
let [gender,setGender]=useState("")
let [age,setAge]=useState("")
      
function handleEditBtn(user){
    setName(user.firstName)
    setEmail(user.email)
    setGender(user.gender)
    setAge(user.age)

}

return(
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Header/>
            </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-5">
                    <input type="text" className="form-control" onChange={event=>handleSearchTextChange(event)} placeholder="Search by Name"/>
                </div>
                <div className="col-8">
                    <table className="table table-striped table-hover">
                        <tr>
                            <th>User Id</th> <th onClick={e=>handleNameSort()}>Name</th> <th>Email</th> <th>Gender</th> <th>age</th>
                            <th>
                                Actions
                            </th>
                        </tr>
                        <tbody>
                        {
                            users.map(user=>(
                                <tr>
                                    <td>{user.id}</td> <td>{user.firstName}</td> <td>{user.email}</td> <td>{user.gender}</td> <td>{user.age}</td>
                                    <td>
                                        <button className="btn btn-primary me-2" onClick={e=>handleEditBtn(user)}>Edit</button>
                                        <button className="btn btn-danger" onClick={e=>{handleDelete(user)}}>Delete</button>
                                    </td>
                                </tr>
                            ))

                        }
                        </tbody>
                    </table>

                </div>

                <div className="col-4">
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text" placeholder="Name" className="form-control" value={name}/>
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="text" placeholder="Email" className="form-control" value={email}/>
                    </div>
                    <div className="mb-2">
                        <label>Gender</label>
                        <input type="text" placeholder="Gender" className="form-control"value={gender}/>
                    </div>
                    <div className="mb-2">
                        <label>Age</label>
                        <input type="text" placeholder="Age" className="form-control" value={age}/>
                    </div>
                    <button className="btn btn-warning">Update</button>
                    

                </div>
                
            <div className="row">
                <Footer/>
            </div>
        </div>
    </div>
)
}
export default UsersList