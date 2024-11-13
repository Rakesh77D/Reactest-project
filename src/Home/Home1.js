import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import TalkToUsForm from "./TalkToUsForm"

function Home1(){

    //Home -> Parent Component
    //Header,Footer,TalkToUsForm -> Child Component

    var homePageMessage="From Home component"
    
    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <Header />

                </div>
                <div className="col-lg-6 pt-5">
                    <h1> Dream software job in 6 months</h1>
                    <p>Learn in-demand carrer paths from industry -exports and become job ready</p>
                </div>
                <div className="col-lg-6 pt-5">
                 <TalkToUsForm message={homePageMessage}/>  
                </div>
                <div className="col-12 mt-5 bg-light text-center p-5">
                <h1>Jumbotron with icon</h1>
                <p>You will learn by building real-time applications during the training and We prepare you for the interviews and will take 2 mock interviews</p>
                <div>
                    <button className="btn btn-primary me-3">Watch Demo</button>
                    <button className="btn btn-success">Create Account</button>
                </div>
                </div>
                
                <div className="col-12 mt-5">
                    <Footer/>


                </div>
            </div>
        </div>
    )
}

export default Home1