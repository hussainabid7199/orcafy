import Emailmarketing from "./Emailmarketing";
import Googleads from "./Googleads";
import Googledisplay from "./Googledispaly";
import Mas from "./Mas";
import Seo from "./Seo";
import Smm from "./Smm";
import Sma from "./Sma";
import Wdc from "./Wdc";
import Servicesidebar from "../Servicesidebar/Servicesidebar";
// import Service from "../../Client/Service/Service";
// import Index from "../../Client/Home/Index";
import Imagebanner from "../Banner/Imagebanner";
// import Data from "../Servicesidebar/Data";

const path = window.location.pathname;




const Content = () => {
    return (

        <>
            <div className="container-fluid px-0">

                {(path === "/service/googleads") ?
                    <Imagebanner headTitle="Google Ads" headPara="Google Ads is a pay-per-click (PPC) advertising platform..." />
                    :


                    (path === "/service/sma") ?
                        <Imagebanner headTitle="Social Media Advertising" headPara="Social media advertising refers to the practice of promoting..." />
                        :


                        (path === "/service/smam") ?
                            <Imagebanner headTitle="Social Media Account Manageme..." headPara="Social media account management involves creating and maintaining..." />
                            :


                            (path === "/service/smm") ?
                            <Imagebanner headTitle="Social Media Management" headPara="Social media account management involves creating and maintaining..." />
                            :



                            (path === "/service/gda") ?
                                <Imagebanner headTitle="Google Display Advertising" headPara="Social media advertising is a powerful way for businesses to reach..." />
                                :



                                (path === "/service/socialmediaads") ?
                                    <Imagebanner headTitle="Social Media Ads" headPara="Social media management is the process of creating and publishing..." />
                                    :


                                    (path === "/service/mas") ?
                                        <Imagebanner headTitle="Marketing Automation Service" headPara="Marketing automation is the use of software and technology to automate..." />
                                        :


                                        (path === "/service/seo") ?
                                            <Imagebanner headTitle="Serach Engine Optimisation (SEO)" headPara="Search engine optimization (SEO) is the process of improving the ranking..." />
                                            :


                                            (path === "/service/websitedesign&creation") ?
                                                <Imagebanner headTitle="Website Design & Creation" headPara="Website design and creation involve planning, designing, and building a website..." />
                                                :

                                                (path === "/service/emailmarketing") ?
                                                    <Imagebanner headTitle="Email Marketing" headPara="Email marketing is the process of sending targeted and personalized emails..." />
                                                    : null}

                          </div>



            <div className="container d-flex">


                <div className="col-3 m-2">
                    <Servicesidebar />
                </div>

                {/* {path === "/service/googleads" ? <Googleads/> : path === "/service/seo" ? <Seo/>;} */}

                <div className="col-9 content-tile-service">
                    {
                        (path === "/service/googleads") ? <Googleads /> :
                            (path === "/service/sma") ? <Sma /> :
                                (path === "/service/smam") ? <Googleads /> :
                                    (path === "/service/gda") ? <Googledisplay /> :
                                        (path === "/service/socialmediaads") ? <Sma /> :
                                            (path === "/service/socialmediamanagement") ? <Smm /> :
                                                (path === "/service/mas") ? <Mas /> :
                                                    (path === "/service/seo") ? <Seo /> :
                                                        (path === "/service/websitedesign&creation") ? <Wdc /> :
                                                            (path === "/service/emailmarketing") ? <Emailmarketing /> :
                                                                (path === "/service/seo") ? <Seo /> : null}
                </div>





            </div>










        </>





    )
}

export default Content;




