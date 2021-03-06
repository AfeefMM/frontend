import ColorButton from './ColorButton';

function Hero(props){
    return(
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src="./bootstrap-logo.svg" alt="" width="72" height="57" />
            <h1 className="display-5 fw-bold">{props.title}</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">{props.description}</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <ColorButton label = {props.buttonLabel1}/>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                    {props.buttonLabel2}
                </button>
              </div>
            </div>
        </div>   
    )
}
export default Hero;