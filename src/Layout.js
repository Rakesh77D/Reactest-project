import Footer from "./Shared/Footer"
import Header from "./Shared/Header"

function Layout(){
    return(
        <div className="container">
            <div className="row">
                <Header/>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col bg-primary">
                   <div className="p-5">
                    <h1>Coding is easy and fun. Practice everyday</h1>
                   </div>
                </div>
                <div className="col-md-6 col-lg-4 bg-success">
                    <div className="p-5">
                    <h1>Coding is easy and fun. Practice everyday</h1>
                    </div>
                </div>
                <div className="col bg-warning">
                    <div className="p-5">
                    <h1>Coding is easy and fun. Practice everyday</h1>
                    </div>
                </div>

            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>

    )
}
export default Layout 