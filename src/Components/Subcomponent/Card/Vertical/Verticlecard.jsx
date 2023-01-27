
// import cardIcon from "../../../image/subIcon/funnel-icon.png";
import { Link } from "react-router-dom";



const Verticlecard = (props) => {

    return (

        <>
            {/* <div className="cardMain my-3 mx-4"> */}
                <div className="card mx-3">
                    <div className="card-inner">
                        <img src={props.image1} class="brand" alt="" />
                        <img src={props.image2} class="brand-awarness" alt="" />
                        <div className={props.Top}>
                            <div className="content-box-tile py-4 mx-4">
                                <p className="my-2">{props.Htitle}</p>
                                <h4><b>{props.Hcontent}</b></h4>
                            </div>
                        </div>
                        <div className={props.Bottom}>
                            <Link className="btn cardBtn button" href={props.target} to={props.navUrl}>Get Started</Link>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}

export default Verticlecard;

