import { Button } from "bootstrap"

const Bannercontent = (props) => {
    return (
        <>

            <div className="inner-content container-fluid">
                <div className="brandName">
                    {/* <h3 onChange={handleHeroBannerOnChange}>{form}</h3> */}
                    <h1>{props.headTitle}</h1>
                </div>
                <div className="brandTagline">
                    <h3>{props.headPara}</h3>
                </div>
               <Button buttonClass={"btn btn-primary"} buttonName={"Get a proposal"} btnIconClass={"bi bi-arrow-right"}/>
            </div>

        </>
    )
}

export default Bannercontent;