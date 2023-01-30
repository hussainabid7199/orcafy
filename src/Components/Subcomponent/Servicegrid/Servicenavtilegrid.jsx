// import logoWallet from "../../../image/orca asset/wallet.png";
import logoRocket from "../../../image/orca asset/rocket_launch.png";
// import logoCellular from "../../../image/orca asset/signal_cellular_alt.png";
// import Servicecard from "./Servicecard";

import { Link } from "react-router-dom";


const Servicenavtilegrid = () => {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="container-fluid text-center">
                    <div className="row d-flex flex-wrap">
                        <div className="col-xl-4 col-sm-4 link-service serv10">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Google Ads"}
                                serviceUrl={"/googleads"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-4 col-sm-4 link-service serv2">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Social Media Advertising"}
                                serviceUrl={"/sma"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-4 col-sm-4 link-service serv3">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Social Media Account Management"}
                                serviceUrl={"/smam"}
                                servInn={"service-inner"}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-sm-4 link-service serv4">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Google Display Advertising"}
                                serviceUrl={"/gda"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-3  col-sm-4 link-service serv5">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Social Media Ads"}
                                serviceUrl={"/socialmediaads"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-4 col-sm-4 link-service serv6">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Social Media Management"}
                                serviceUrl={"/socialmediamanagement"}
                                servInn={"service-inner"}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-sm-4 link-service serv7">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Marketing Automation Service"}
                                serviceUrl={"/mas"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-7 col-sm-4 link-service serv8">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Search Engine Optimization (SEO)"}
                                serviceUrl={"/seo"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-5 col-sm-4 link-service serv9">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Website Design & Creation"}
                                serviceUrl={"/websitedesign&creation"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-4 col-sm-4 link-service serv6">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Email Marketing"}
                                serviceUrl={"/emailmarketing"}
                                servInn={"service-inner"}
                            />
                        </div>
                        <div className="col-xl-3 col-sm-4 link-service serv3">
                            <Servicetile
                                servImg={logoRocket}
                                servTitle={"Social Media Management"}
                                serviceUrl={"/smm"}
                                servInn={"service-inner"}
                            />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}


export default Servicenavtilegrid;




const Servicetile = (props) => {
    return (

        <>


            <Link to={props.serviceUrl}>
                <div className={props.servInn}>
                    <div className="service-card-logo d-flex justify-content-center mt-4">
                        <div className=" mb-4 icon-service">
                            <img src={props.servImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="service-card-content d-flex justify-content-center text-center mx-2">
                        <h2>{props.servTitle}</h2>
                    </div>
                </div>
            </Link>



        </>
    )
}