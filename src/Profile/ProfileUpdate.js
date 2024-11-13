import { useState } from "react"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"

function ProfileUpdate(){
    let [profileFile,setProfileFile]=useState("")

    let[fileTypeError,setFileTypeError]=useState("")

    let[fileSizeerror,setFileSizeError]=useState("")

function handleFileChange(e){
    //console.log(e.target.files[0])
    setProfileFile(e.target.files[0])

}


function uploadFile(e){
    console.log(profileFile)
    let filename=profileFile.name 
    let fileArray=filename.split(".")
    let extension=fileArray[fileArray.length-1]

    if(extension == "png" || extension == "jpg"){
       // console.log("no error")
       setFileTypeError("No error")
    }else{
        setFileTypeError(extension + " is not allowed")

    }
    let fileSize=profileFile.size/(1024*1024) //in MB

    if(fileSize<=1){
        console.log("no errors")
    }else{
        console.log("max 1 MB only")
    }

}
    return (
        <div className="container">
            <div className="row">
                <Header/>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-12">
                  <h4> Upload Profile Pic </h4>
                    
                    <div>
                    <input type="file" className="form-control" onChange={e=>handleFileChange(e)}/>
                    </div>

                    <div className="mt-3">
                        <button className="btn btn-primary" onClick={e=>uploadFile()}>Upload File</button>
                    </div>


                    <div className="mt-3 text-danger">
                        {
                            fileTypeError
                        }
                        <br/>
                        {
                            fileSizeerror
                        }

                    </div>

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
export default ProfileUpdate