//function TalkToUsForm(){
function TalkToUsForm({message}){
    return(
        <div className="card shadow p-4 border-0">
            <div>
                <h2 className="text-danger">{message}</h2>
            </div>
            <div className="mb-3">
                <label>name</label>
                <input type="text" placeholder="Name" className="form-control"/>
            </div>
            <div className="mb-3">
                <label>email</label>
                <input type="text" placeholder="Email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label>mobile</label>
                <input type="text" placeholder="Mobile" className="form-control"/>
            </div>
            <div className="mb-3">
               <button className="btn btn-warning">SUBMIT DATA</button>
            </div>
        </div>
    )
}

export default TalkToUsForm