// import "./Casestudy.css";
import BrandLogo from "../../../image/brandLogo/logo.png"



const Casestudy = () => {
    return (
        <>
            <div className="container">
                <div className="cardCaseStudy  d-flex justify-content-center pt-5">
                    <div className="innerCardContext caseImg1">
                        <div className="inner-con-case">
                            <div className="logo-case my-5">
                                <img src={BrandLogo} alt="" className="img-fluid" />
                            </div>
                            <div className="rateOfGrowth text-white">
                            <i class="bi bi-caret-up-fill"></i>&nbsp;<h1><b>165%</b></h1>
                            </div>
                            <div className="caseTextCon text-white">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, recusandae!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="innerCardContextCen caseImg2">
                    <div className="inner-con-case">
                            <div className="logo-case my-5">
                                <img src={BrandLogo} alt="" className="img-fluid" />
                            </div>
                            <div className="rateOfGrowth text-white">
                            <i class="bi bi-caret-up-fill"></i>&nbsp;<h1><b>100%</b></h1>
                            </div>
                            <div className="caseTextCon text-white">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, recusandae!</h6>
                            </div>
                        </div>
                    </div>
                    <div className="innerCardContext caseImg3">
                    <div className="inner-con-case">
                            <div className="logo-case my-5">
                                <img src={BrandLogo} alt="" className="img-fluid" />
                            </div>
                            <div className="rateOfGrowth text-white">
                            <i class="bi bi-caret-up-fill"></i>&nbsp;<h1><b>120%</b></h1>
                            </div>
                            <div className="caseTextCon text-white">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, recusandae!</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caseStudyBtn my-5 d-flex justify-content-center">
                    <button className="btn cardBtn">See More Case Study</button>
                </div>
            </div>

        </>
    )
}

export default Casestudy;