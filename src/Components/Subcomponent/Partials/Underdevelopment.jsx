

const Underdevelopment = (props) => {
    return (
        <>
            <div className="container underdev d-flex justify-content-center">
                <div className="under-construction">
                    <h2>{props.pageName}</h2>
                    <h6>is</h6>
                    <h1>Under Development</h1>
                    <p>We apologize for the inconvenience, this page is currently under development.</p>
                    <p>Please check back later.</p>
                </div>
            </div>
        </>
    )
}

export default Underdevelopment;

// Css is in footer scss file for underdevelopment