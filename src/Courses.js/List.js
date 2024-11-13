import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

function List(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>

                <div className="col-6">
                    <h1>In-demand courses for quick job</h1>
                </div>
                <div className="col-6">
                    <h1>In-demand courses for quick job</h1>
                </div>
                
                <div className="col-12">
                    <Footer/>
                </div>

            </div>
        </div>
    )
}

export default List