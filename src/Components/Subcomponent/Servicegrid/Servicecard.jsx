
const Servicecard = (props) => {
    return (
        <>
            <div className="service-card d-flex justify-content-center mx-3 flex-wrap">
                <div className="service-card-inner">
                    <div className="card-logo d-flex justify-content-center mt-4">
                        <div className="card-logo-inner mb-4">
                            <img src={props.serviceLogo} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="card-content d-flex justify-content-center text-center mx-2">
                        <h5>{props.serviceContent}</h5>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Servicecard;