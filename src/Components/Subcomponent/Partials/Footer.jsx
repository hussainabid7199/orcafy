// import "./Footer.css"

import BrandLogo from "../../../image/brandLogo/logo2.png";




const Footer = () => {
    return (

        <>
            {/* Footer Start  */}
            <div className="container-fluid position-relative overlay-top bg-wheat text-white pt-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <a href="/" className="navbar-brand">
                                <img src={BrandLogo} alt="" className="my-2" />
                            </a>
                            <p className="m-0">Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero clita diam</p>
                        </div>
                        {/* <div className="col-md-6 mb-5">
                            <h3 className="text-dark mb-4">Newsletter</h3>
                            <div className="w-100">
                                <div className="input-group">
                                    <input type="text" className="form-control border-light" placeholder="Your Email Address" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary px-4">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-5">
                            <h3 className="text-white mb-4">Get In Touch</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>80 Richmond Street West, Suite 700, Toronto, ON
                                M5H 2A4</p>
                            <p><i className="fa fa-phone-alt mr-2"></i>(705) 999-4767</p>
                            <p><i className="fa fa-envelope mr-2"></i>info@orcafy.ca</p>
                            <div className="d-flex justify-content-start mt-4 socialMedia">
                                <a className="text-white mr-4" href="/"><i class="bi bi-facebook"></i></a>
                                <a className="text-white mr-4" href="/"><i class="bi bi-whatsapp"></i></a>
                                <a className="text-white mr-4" href="/"><i class="bi bi-linkedin"></i></a>
                                <a className="text-white" href="/"><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <h3 className="text-white mb-4"><b>Service</b></h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Web Design</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Apps Design</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Marketing</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Research</a>
                                <a className="text-white" href="/"><i className="fa fa-angle-right mr-2"></i>SEO</a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <h3 className="text-white mb-4"><b>Community</b></h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Privacy Policy</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Terms & Condition</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Regular FAQs</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Help & Support</a>
                                <a className="text-white" href="/"><i className="fa fa-angle-right mr-2"></i>Contact</a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <h3 className="text-white mb-4"><b>Usefull Link</b></h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Privacy Policy</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Terms & Condition</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Regular FAQs</a>
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Help & Support</a>
                                <a className="text-white" href="/"><i className="fa fa-angle-right mr-2"></i>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-blue text-white border-top py-4 brandBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0 d-flex justify-content-center">
                            <p className="m-0 d-flex">&copy;&nbsp;Copyright&nbsp;<a href="/"><b>Orcafy</b></a>&nbsp;All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-right d-flex">
                            <p className="m-0">Developed & Designed by <a className="text-blue" href="/">ABID HUSSAIN</a> & <a className="text-blue" href="/">MANISH KUMAR</a></p>

                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End  */}






        </>


    );
}

export default Footer;