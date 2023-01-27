// import PropTypes from 'prop-types';
// import Heroimage from "../../../image/Bannervideo/1.mp4";
import { Link } from "react-router-dom"


const Imagebanner = (props) => {

    return (
        <>
            {/* <section className="heroBanner"> */}
            {/* <video src={Herovideo} autoPlay loop muted /> */}
            {/* <div className="heroBackground"> */}
            {/* <Herobannervideo/> <ReactPlayer url={Herovideo}/> */}
            {/* <div className="inner-content container-fluid text-left"> */}
            {/* <div className="brandName"> */}
            {/* <h3 onChange={handleHeroBannerOnChange}>{form}</h3> */}
            {/* <h1>{props.headTitle}</h1> */}
            {/* </div> */}
            {/* <div className="brandTagline">
                            <h3>{props.headPara}</h3>
                        </div>
                        <div className="bannerBtn mt-5">
                            <button className="btn btn-primary">Get a Proposal &nbsp; <i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div> */}



            <div className="imagebanner container-fluid">
                <div className="row">
                    <div className="contant-service col-xxl-12">
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
                </div>
                <div id="background-wrap">
                    <span className="bubble x1"></span>
                    <span className="bubble x2"></span>
                    <span className="bubble x3"></span>
                    <span className="bubble x4"></span>
                    <span className="bubble x5"></span>
                    <span className="bubble x6"></span>
                    <span className="bubble x7"></span>
                    <span className="bubble x8"></span>
                    <span className="bubble x9"></span>
                    <span className="bubble x10"></span>

                    <span className="bubble x11"></span>
                    <span className="bubble x12"></span>
                    <span className="bubble x13"></span>
                    <span className="bubble x14"></span>
                    <span className="bubble x15"></span>
                    <span className="bubble x16"></span>
                    <span className="bubble x17"></span>
                    <span className="bubble x18"></span>
                    <span className="bubble x19"></span>
                    <span className="bubble x20"></span>
                </div>
            </div>
            {/* </section> */}
        </>
    );
}


// Imagebanner.propTypes = {
//     brandName: PropTypes.string.isRequired,
//     brandTagline: PropTypes.string.isRequired
// };

export default Imagebanner;


