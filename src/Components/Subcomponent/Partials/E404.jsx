const E404 = (props) => {
    return (
        <>
            <div className="container underdev d-flex justify-content-center">
                <div className="under-construction">
                    <h2>{props.ContentTitle}</h2>
                    <h6>is</h6>
                    <h1>Updating Soon</h1>
                    <p>We apologize for the inconvenience, this page is currently under development.</p>
                    <p>Please check back later.</p>
                </div>
            </div>
        </>
    )
}

export default E404;