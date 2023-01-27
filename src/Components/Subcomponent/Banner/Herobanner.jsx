import {Link} from "react-router-dom"
import Herovideo from "../../../image/Bannervideo/1.mp4";



const Herobanner = (props) => {

    // const [form, passedForm] = useState("Form need to be passed")

    // const handleHeroBanner = () => {
    //     console.log("Get a Proposal Got Clicked");
    //     passedForm("Update Successfull");
    // }

    // const handleHeroBannerOnChange = (event) => {
    //     console.log("Got Active On Change");
    //     passedForm(event.target.h3);
    // }


    return (
        <>
            <section className="heroBanner">
                <video src={Herovideo} autoPlay loop muted />
                <div className="heroBackground">
                    {/* <Herobannervideo/> <ReactPlayer url={Herovideo}/> */}
                    <div className="inner-content container-fluid">
                        <div className="brandName">
                            {/* <h3 onChange={handleHeroBannerOnChange}>{form}</h3> */}
                            <h1>{props.headTitle}</h1>
                        </div>
                        <div className="brandTagline">
                            <h3>{props.headPara}</h3>
                        </div>
                        <div className="bannerBtn mt-5">
                            <Link className="btn button" to={"/getaproposal"}>Get a proposal &nbsp; <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )}


export default Herobanner;



