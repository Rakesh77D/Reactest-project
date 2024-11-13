import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "./Shared/Footer"
import Header from "./Shared/Header"
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-regular-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

function Icons(){
    return(
        <div className="container">
        <div className="row">
            <div className="col-12">
           <Header/>

            </div>
            </div>

            <div className="row mt-5 mb-5">
            <div className="col-12">
                 <h4>Icons</h4>
                 <div className="mt-2">
                    Share:<h1><FontAwesomeIcon icon={faArrowUpFromBracket} className="text-primary" /> </h1>
                 </div>
                 <div className="mt-2">
                    Delete File:<FontAwesomeIcon icon={faTrashCan} className="text-danger" />
                 </div>
                 <div className="mt-2">
                   My Youtube Channel:  <div className="col-12">
                    Delete File:<FontAwesomeIcon icon={faYoutube} />
                 </div>
                 </div>
                </div>
                
              

            </div>
            <div className="row">
                <Footer/>

            </div>
        </div>
    )
}

    
export default Icons